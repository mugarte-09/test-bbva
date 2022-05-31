import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './TestCapacitacion-styles.js';
import '@bbva-web-components/bbva-button-default';
import '@bbva-web-components/bbva-form-field';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<test-capacitacion></test-capacitacion>
```

##styling-doc

@customElement test-capacitacion
*/
export class TestCapacitacion extends LitElement {
  static get is() {
    return 'test-capacitacion';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
      number : { type: Number}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
    this.number = 0;
    this.input = "";
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('test-capacitacion-shared-styles')
    ];
  }

  testClick () {
    this.dispatchEvent(new CustomEvent('test-event',{
      bubbles: true,
      composed: true,
      detail:{
        value: this.input
      }
    }))
  }

  testInput() {
    let field = this.shadowRoot.querySelector('#testForm');
    this.input= field.__value;
  }

  // Define a template
  render() {
    return html`
      <bbva-form-field id="testForm" label="Field label" required="" @input=${this.testInput} form="testFrom"></bbva-form-field>
      <bbva-button-default id="testFrom" type="submit" form="testFrom" @click= ${this.testClick} >Submit</bbva-button-default>
    `;
  }
}
