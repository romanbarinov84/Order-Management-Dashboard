import { createActor } from "xstate";
import { doorMachine } from "./machines/door.machine";

const actor = createActor(doorMachine);

actor.start();
actor.send({
    type:"OPEN",
    pin:"1234"
})

console.log(actor.getSnapshot().value);
console.log(actor.getSnapshot().context);






