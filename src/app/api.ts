

var api_Base = '/api'

  export var API_DEV_HOST = 'dev-urlease.firstdata.com';
//export var API_DEV_HOST = 'localhost:8080';


export var API = {
    getLease: 'https://api.myjson.com/bins/18wefb',
    merchant_register: api_Base + '/merchants',
    merchant_logout: api_Base + '/logout',
    login: api_Base + '/login',
    merchant_leases: api_Base + '/merchants/{merchantId}/leases',
    forget_password: api_Base + '/merchants/password',
    change_password: api_Base + '/password',
    get_epp: api_Base + '/epps?startDate={startDate}endDate={endDate}',
    save_epp: api_Base + '/merchants/{merchantId}/epp'
};

export var api_header = {
    X_App_Client: '0',
    token: ''
};