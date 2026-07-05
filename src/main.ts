import { createActor } from "xstate";
import { doorMachine } from "./machines/door.machine";

const actor = createActor(doorMachine);

actor.start();

console.log(actor.getSnapshot().value);
console.log(actor.getSnapshot().context);
console.log(actor.getSnapshot());




