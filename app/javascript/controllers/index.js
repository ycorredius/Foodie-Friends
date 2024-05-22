// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import NestedForm from "stimulus-rails-nested-form";

import {
  Alert,
  Autosave,
  ColorPreview,
  Dropdown,
  Modal,
  Tabs,
  Popover,
  Toggle,
  Slideover,
} from "tailwindcss-stimulus-components";
application.register("alert", Alert);
application.register("autosave", Autosave);
application.register("color-preview", ColorPreview);
application.register("dropdown", Dropdown);
application.register("modal", Modal);
application.register("popover", Popover);
application.register("slideover", Slideover);
application.register("tabs", Tabs);
application.register("toggle", Toggle);
application.register("nested-form", NestedForm);

import HelloController from "./hello_controller";
application.register("hello", HelloController);

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
