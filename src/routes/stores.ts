import { writable } from "svelte/store";
import Player from "$lib/Player";

export const players = writable([new Player("Player 1", true), new Player("Player 2", false)]);
export const turnPlayer = writable(0)
export const distance = writable(10);
export const dust = writable(0);
export const masterDistance = writable(2);