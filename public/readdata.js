function readdata(filename,dataname)
{  
    var alldata=[];
    var colname=dataname;
    $.ajax({  
        url:filename,
        type:'GET',
        dataType: 'json',  
        async:false,
        beforeSend: LoadFunction, //加载执行方法    
        error: erryFunction,  //错误执行方法    
        success: succFunction //成功执行方法    
    })  
    function LoadFunction() {  

    }  
    function erryFunction() {  
        alert("error");  
    }  
    function succFunction(tt) {  
        var json = eval(tt); //数组  
        for(var i in json){
            var aa = json[i][colname];  
            alldata.push(aa);
        }
    }
    if(alldata!=null){
        return alldata;
    }
}

function getshowdata(year){
    var filepath="data/yearJson/";
    var filetype=".json"
    var region=readdata(filepath+year+filetype,"region");
    var incidence=readdata(filepath+year+filetype,"incidence rate");
    var min=9999;
    var max=0;
    for(var i=0;i<incidence.length;i++){
        incidence[i]=parseInt(incidence[i]);
    }
    for(var i=0;i<incidence.length;i++){
        if(max<incidence[i]){
            max=incidence[i];
        }
        if(max>incidence[i]){
            min=incidence[i];
        }
    }
    var data=[];
    data.push({"name":"min","value":min});
    data.push({"name":"max","value":max});
    for(var i=0;i<region.length;i++){
        data.push({"name":region[i],"value":parseFloat(incidence[i])});
    }
    return data;
}

function getprovincedata(provincename,dataname){
    var filepath="data/provinceJson/";
    var filetype=".json";
    var incidence=readdata(filepath+provincename+filetype,dataname);
    var data=[];
    for(var i=0;i<incidence.length;i++){
        data.push(parseFloat(incidence[i]));
    }
    return data;
}
function getmaxincidence(year){
    var filepath="data/yearJson/";
    var filetype=".json"
    var region=readdata(filepath+year+filetype,"region");
    var incidence=readdata(filepath+year+filetype,"cases");
    for(var i=0;i<incidence.length;i++){
        incidence[i]=parseInt(incidence[i]);
    }
    for (var i = 0; i < incidence.length; i++)
    {
        for (var j = i; j < incidence.length; j++)
        {
            if (incidence[i] > incidence[j])
            {
                var temp = incidence[i];
                incidence[i] = incidence[j];
                incidence[j] = temp;

                var temp1=region[i];
                region[i] = region[j];
                region[j] = temp1;
            }
        }
    }
    var data=[];
    for(var i=0;i<region.length;i++){
        data.push({"name":region[i],"value":incidence[i]});
    }
    return data;
}

function getmaxdeath(year){
    var filepath="data/yearJson/";
    var filetype=".json"
    var region=readdata(filepath+year+filetype,"region");
    var death=readdata(filepath+year+filetype,"deaths");
    for(var i=0;i<death.length;i++){
        death[i]=parseInt(death[i]);
    }
    for (var i = 0; i < death.length; i++)
    {
        for (var j = i; j < death.length; j++)
        {
            if (death[i] > death[j])
            {
                var temp = death[i];
                death[i] = death[j];
                death[j] = temp;

                var temp1=region[i];
                region[i] = region[j];
                region[j] = temp1;
            }
        }
    }
    var data=[];
    for(var i=0;i<region.length;i++){
        data.push({"name":region[i],"value":death[i]});
    }
    return data;
}
