/* 
Define a slot machine with three reels that can individuallyspin(), and thendisplay()the current contents of all thereels.
The basic behavior of a single reel is defined in the reel object below. 
But the slot machine needs individual reelsâ€”objectsthat delegate toreel, and which each have a position property.
A reel only knows how todisplay() its current slot symbol, 
but a slot machine typically shows three symbols per reel: 
the current slot (position), 
one slot above (position - 1),
and one slot below (position + 1). 
So displaying the slot machine should end up displaying a 3x3 grid of slot symbols.
*/

function randMax(max) {
    returnMath.trunc(1E9 * Math.random()) % max;
}
varreel = {
    symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        return this.symbols[this.position];
    }
}; varslotMachine = {
    reels: [
        // this slot machine needs 3 separate reels
        // hint: Object.create(..)
    ],
    spin() {
        // this.reels.forEach(functionspinReel(reel){ 
        //     reel.spin(); 
        // });
    },
    display() {
        // TODO
    }
};

slotMachine.spin();
slotMachine.display();
// < | @ | *
// @ | X | <
// X | Y | @

slotMachine.spin();
slotMachine.display();
// Z | X | W
// W | Y | $
// $ | Z | *