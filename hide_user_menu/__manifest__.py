
{
    'name': 'Hide User Menu',
    'version': '1.2',
    'summary': 'User Can Remove and Add User Menus',
    'description': 'Administrators can easily manage and configure the visibility of menu items through the Odoo interface, without needing to modify the code directly.',
    'sequence': 10,
    'author': "JD DEVS",
    'depends': ['base', 'mail'],
    'data': [
        'data/users_menus_data.xml',
        'views/hide_menu.xml',
        'security/ir.model.access.csv',
    ],
    'assets': {
        'web.assets_backend': [
            '/hide_user_menu/static/src/js/users_menu.js',
        ],
    },
    'images': ['static/description/assets/screenshots/banner.jpg'],
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
