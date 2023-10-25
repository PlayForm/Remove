/**
 * @module Integration
 *
 */
export default interface Type {
	(Option: Option): AstroIntegration;
}

import type Option from "../Type/Option.js";

import type { AstroIntegration } from "astro";
