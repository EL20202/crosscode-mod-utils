sc.ModUtils = ig.Class.extend({
    init() {
        ig.vars.registerVarAccessor("mod", this);
    },

    onVarAccess(_a, b) {
        if(b[0] === "mod") {
            switch(b[2]) {
                case "active":
                    return versions.hasOwnProperty(b[1])
                // i'm not sure how helpful this would be on its own, though i have an idea.
                case "version":
                    return versions[b[1]]
            }
        }
    },
})


ig.addGameAddon(() => (sc.modUtils = new sc.ModUtils));
