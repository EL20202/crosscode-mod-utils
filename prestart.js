sc.modUtils = {
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

    /*
     * Handles all parts in registering a new submenu, for example, shops.
     * 
     * menuName: the name of the submenu entry, accessible by sc.MENU_SUBMENU.{menuName}
     * menuClass: the class of the actual menu, such as sc.ShopMenu
     * langName: the name lang entry in assets/data/lang/sc/gui.[lang].json > labels > menu > menu-titles
     * altName: alternative lang entry, in case that is necessary (vanilla example: save/load uses the same menu, and "load" is used as the alt name.)
    */
    registerMenu(menuName, menuClass, langName, altName = null) {
        if (menuName in sc.MENU_SUBMENU) {
            ig.warn(`Warning: Submenu with id ${menuName} already taken!`);
            return false;
        }

        sc.MENU_SUBMENU[menuName] = menuName;

        sc.SUB_MENU_INFO[sc.MENU_SUBMENU[menuName]] = {
            Clazz: menuClass,
            name: langName
        }

        if(altName) sc.SUB_MENU_INFO[sc.MENU_SUBMENU[menuName]].alt = altName;

        return true;
    }
}
