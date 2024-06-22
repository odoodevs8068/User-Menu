/** @odoo-module **/
import { registry } from "@web/core/registry";
import { preferencesItem } from "@web/webclient/user_menu/user_menu_items";

const menuServiceRegistry = registry.category("user_menuitems");
var rpc = require('web.rpc');

    rpc.query({
        model: 'res.config.settings',
        method: 'get_values',
        args: [],
    }).then(function (data) {
        if (data['users_menus_ids'].length !== 0) {
            var users_menus_ids = data['users_menus_ids'][0][2];
            if (users_menus_ids.length !== 0) {
                rpc.query({
                    model: 'hide.users.menus',
                    method: 'read',
                    args: [users_menus_ids],
                }).then(function (menuData) {
                    for (var i = 0; i < menuData.length; i++) {
                        if (menuData[i].name === 'Documentation') {
                            menuServiceRegistry.remove('documentation');
                        }

                        if (menuData[i].name === 'Odoo Account') {
                           menuServiceRegistry.remove("odoo_account");
                        }

                        if (menuData[i].name === 'Preferences') {
                           menuServiceRegistry.remove("profile");
                        }

                        if (menuData[i].name === 'Shortcuts') {
                           menuServiceRegistry.remove("shortcuts");
                        }

                        if (menuData[i].name === 'Support') {
                           menuServiceRegistry.remove("support");
                        }

                        if (menuData[i].name === 'Separator') {
                           menuServiceRegistry.remove("separator");
                        }

                        if (menuData[i].name === 'Log Out') {
                           menuServiceRegistry.remove("log_out");
                        }

                    }
                }).catch(function (error) {
                        console.error("Error querying menu data:", error);
                });
            } else {
                    console.log("Invalid or insufficient data in users_menus_ids array");
            }
        } else{
             console.log("No Properties to Read");
        }
    });