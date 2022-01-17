/*
 * command module - intended for mod devs, not the user.
 * these commands are more intended for to simplify things when using the console.
 * they can vary from just "shortcuts", to possibly other things.
 * i discourage using them in code, though i guess nothing's stopping you...
*/
window.cmd = {
    addItem: (id, amount = 1, hideMsg) => {
        if(sc.inventory.getItem(id)){
            sc.model.player.addItem(id, amount, hideMsg)
        } else {
            console.warn(`Item ${id} does not exist!`)
        }
    },
    addCredits: (amount) => sc.model.player.addCredit(amount),
    teleport: (mapName, destination) => ig.game.teleport(mapName, destination),
}