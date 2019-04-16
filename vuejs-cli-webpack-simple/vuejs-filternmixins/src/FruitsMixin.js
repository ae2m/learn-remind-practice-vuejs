export const fruitsMixin = {
    filters: {
        'toUpperCase': function(value){
            return value.toUpperCase();
        }
    },methods: {
        someAlertMixin: function(value){
            alert('Alert from mixin => [ '+value+' ]');    
        }
    },
}