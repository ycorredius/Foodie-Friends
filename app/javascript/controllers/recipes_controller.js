import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="recipes"
export default class extends Controller {
  connect() {
    console.log("Hi!");
  }

  submit(e) {}
}
