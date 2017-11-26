option = {
    tooltip : {
        trigger: 'axis'
    },    
    legend: {
        data:['发病率（1/20万）','死亡率（1/20万）']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : [1950,1951,1952,1953,1954,1955]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'发病率（1/20万）',
            type:'line',
            stack: '总量',
            data:[39.73, 593.54, 487.87, 1413.08, 390.66, 2720.96]
        },
        {
            name:'死亡率（1/20万）',
            type:'line',
            stack: '总量',
            data:[7.86,47.74,13.85, 37.99, 2.45, 24.77]           
        }
    ]
};
                    