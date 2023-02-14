// ** Descrizione: **
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano(true / false) che indica se il todo è stato fatto oppure no
// ** MILESTONE 1 **
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// ** MILESTONE 2 **
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// ** MILESTONE 3 **
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos : [
                {
                    text : "Pranzare",
                    done : false,
                },

                {
                    text: "Portare il cane a passeggio",
                    done: false,
                },

                {
                    text: "Chiamare l'elettricista",
                    done: false,
                },

                {
                    text: "Finire l'esercizio di oggi",
                    done: false,
                },

                {
                    text: "Andare a fare aperitivo",
                    done: false,
                },
            ],

            new_li : {
                text : "",
                done : false
            }

        }
    },

    methods : {
        todo_done(index) {
            // console.log("clicked" + index);


                // se è true, intelrineala -- OK
            this.todos[index].done = true;

                // se è true, rimuovila -- OK
            // this.todos.splice(index, 1);

        },

        add_li() {
            console.log(this.new_li); // vedi subito che è un proxy!
            // this.todos.push(this.new_li); 

            // funziona MA questo todo continua a rimanere in ascolto e quindi reattivo.. stupid proxy! QUINDI devo "scollegarli" per rendere il nuovo todo non-reattivo (non collegato al v-model). Scollego creandone una copia:
                // const copy = {
                //     text : this.new_li.text,
                //     done : false,
                // }
                // this.todos.push(copy);

            // OPPURE, la versione migliore:
                const new_lalala = {
                    ...this.new_li,
                }
                this.todos.push(new_lalala);

            // svuoto la input bar quando invio un nuovo new_li :)
            this.new_li.text = "";

        }
    }

}).mount("#my-app");