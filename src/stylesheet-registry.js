import StyleSheetRegistry from "styled-jsx/dist/stylesheet-registry";

export default class Registry extends StyleSheetRegistry {
  add(props) {
    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children)
      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed)
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer()
      this._instancesCounts = Object.keys(this._fromServer).reduce(
        (acc, tagName) => {
          acc[tagName] = 0
          return acc
        },
        {}
      )
    }

    const { styleId, rules } = this.getIdAndRules(props)

    // Deduping: just increase the instances count.
    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1
      return
    }

    const indices = rules
      .map(rule => this._sheet.insertRule(rule))
      // Filter out invalid rules
      .filter(index => index !== -1)


    this._indices[styleId] = indices
    this._instancesCounts[styleId] = 1
  }

  remove(props) {
    const { styleId } = this.getIdAndRules(props);
    invariant(
      styleId in this._instancesCounts,
      `styleId: \`${styleId}\` not found`
    );

    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {

      const tagFromServer = this._fromServer && this._fromServer[styleId];
      if (tagFromServer) {
        if (tagFromServer === "test") {

        } else {
          // tagFromServer.parentNode.removeChild(tagFromServer);
        }

        delete this._fromServer[styleId];
      } else {

        this._indices[styleId].forEach(index => this._sheet.deleteRule(index));

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  }

  cssRules() {
    const fromServer = this._fromServer
      ? Object.keys(this._fromServer).map(styleId => [
        styleId,
        this._fromServer[styleId]
      ])
      : []
    const cssRules = this._sheet.cssRules()

    return fromServer.concat(
      Object.keys(this._indices)
        .map(styleId => [
          styleId,
          this._indices[styleId]
            .map(index => cssRules[index].cssText)
            .join(this._optimizeForSpeed ? '' : '\n')
        ])
        // filter out empty rules
        .filter(rule => Boolean(rule[1]))
    )
  }

  flush() {
    this._sheet.flush()
    this._sheet.inject()
    this._fromServer = undefined
    this._indices = {}
    this._instancesCounts = {}

    this.computeId = this.createComputeId()
    this.computeSelector = this.createComputeSelector()
  }

  selectFromServer() {
    const elements = Array.prototype.slice.call(document.querySelectorAll("[id^=\"__jsx-\"]"));
    const global = document.getElementById("__jsx-global")?.dataset?.ids?.split(",").reduce((acc, id) => {
      acc[id] = "test";
      return acc;
    }, {});

    return {
      ...global,
      ...elements.reduce(function (acc, element) {
        const id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {})
    };
  }
}

function invariant(condition, message) {
  if (!condition) {
    throw new Error(`StyleSheetRegistry: ${message}.`);
  }
}