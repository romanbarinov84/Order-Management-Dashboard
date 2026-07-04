import { createMachine } from "xstate";

export const doorMachine = createMachine({
    id:"door",
    initial:"closed",
    states:{
        closed:{},
        opened:{},
    }
})