from odoo import api, fields, models, Command, _
from ast import literal_eval


class ConfSetting(models.TransientModel):
    _inherit = "res.config.settings"

    users_menus_ids = fields.Many2many('hide.users.menus')

    def set_values(self):
        res = super(ConfSetting, self).set_values()
        self.env['ir.config_parameter'].sudo().set_param('hide_user_menu.users_menus', [(6, 0, self.users_menus_ids.ids)])
        return res

    @api.model
    def get_values(self):
        res = super(ConfSetting, self).get_values()
        ICPSudo = self.env['ir.config_parameter'].sudo()
        users_menus = ICPSudo.get_param('hide_user_menu.users_menus')
        users_menus_ids = literal_eval(users_menus) if users_menus else []
        res.update(
            users_menus_ids=users_menus_ids
        )
        return res


class UserMenu(models.Model):
    _name = 'hide.users.menus'

    name = fields.Char('Name')