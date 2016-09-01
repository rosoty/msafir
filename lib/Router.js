Router.configure({
    layoutTemplate: 'MainLayout',
    onAfterAction: function(){
        var s1 = IRLibLoader.load('js/jquery.min.js');
        if(s1.ready()){
            var s3 = IRLibLoader.load('js/framework.js');
            if(s3.ready()){
                var s4 = IRLibLoader.load('/js/scripts.js',{
                    success: function(){ console.log('SUCCESS CALLBACK'); },
                    error: function(){ console.log('ERROR CALLBACK'); }
                });
                if( s4.ready()){
                    this.next();
                }
            }
        }    
    }
});
Router.route('/',{
    name:'home'
});
Router.route('/test',{
    name:'test'
});
