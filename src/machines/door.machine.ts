import { assign, createMachine } from "xstate";


export const doorMachine = createMachine({
    initial:"closed",

    context:{
        attempts:0,
    },

    states:{
        closed:{
            on:{
                OPEN:{
                    target:"opened",
                    actions:assign({
                        attempts:({context}) => context.attempts + 1
                    }),
                }
            }
        },
        opened:{
            on:{
                CLOSE:{
                    target:"closed"
                }
            }
        }
    }
})