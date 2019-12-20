$(document).ready(function(){    
    form1 = $('#form');
    form2 = $('#form2');
    form2.hide();

    // action on toggle button click (button that says 'calculate by type')
    $('#toggle').on('click', function () {
        form1.hide();
        form2.css('display', 'block');
        $('label').css('width', '186px');        
    })

    // action on toggle button click (button that says 'calculate by relation')
    $('#toggle2').on('click', function () {
        form2.hide();
        form1.show();
        $('label').css('width', '150px');
    })    
    
    // action on button click  
    $('#button').on('click', function(){ 
        // get value selected in type field 
        type = $('#type').val();
        type2 = $('#type2').val();

        // get value selected in type relation field
        relation = $('#relation').val();

        // get handle to container
        container = $('#container');

        // call getFunction() to get function order for type
        baseOrder = getFunctions(type);

        // call findRelation() to get function order of relation type
        newOrder = findRelation(baseOrder, relation);

        // call decodeFunctions() to return the type that matches the function order (of relation type)
        relationType = decodeFunctions(newOrder);

        relation = relation.charAt(0).toUpperCase() + relation.substring(1);
        
        info = "<h2>" + "Your " + "<span id='special'>" +  relation + "</span>" + " Type Relation is: " + "</h2>" + "<h1 class='specialH1'>" + relationType.toUpperCase() + "</h1>" ;
        container.html(info);
        $('.specialH1').css('margin-bottom', '10px');
        $('h2').css('margin-top', '10px');
        $('h2').css('margin-bottom', '-15px');
        $('#specialH1').css('margin-bottom', '10px');
        $('#specialH1').css('font-size', '-=10px');
        container.css('padding', '5px 0');
    });


    $('#button2').on('click', function() { 
        // get type one value
        type = $('#type1').val();

        // get type 2 value
        type2 = $('#type2').val();

        // get handle to container
        container = $('#container');

        type1Order = getFunctions(type);
        type2Order = getFunctions(type2);
        relation = findRelationByType(type1Order, type2Order);
        relation = relation.charAt(0).toUpperCase() + relation.substring(1);
        
        info = "<h2>" + "<span id='special2'>" + type2.toUpperCase() + "</span>" + " is Your: " + "</h2>" + "<h1 class='specialH1'>" + "<span id='special'>" +  relation + "</span>" + " relation" + "</h1>";
        
        container.html(info);
        $('.specialH1').css('margin-bottom', '10px');
        $('.specialH1').css('font-size', '-=10px');
        container.css('padding', '5px 0');
        $('h2').css('margin-top', '10px');
        $('h2').css('margin-bottom', '-15px');
    });    


    // function for finding type relation
    function findRelation(baseOrder, relation) {
        newOrder = '';
        
        switch (relation) {
            case 'supervisee':
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(12,14);
                break;
            case 'supervisor':
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(2,4);
                break;
            case 'benefactor':
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(4,6);
                break;
            case 'beneficiary':
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(10,12);
                break;
            case 'mirror':
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(12,14);
                break;
            case 'activity':
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(10,12);
                break;
            case 'duality':
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(8,10);
                break;
            case 'kindred':
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(14,16);
                break;
            case 'partduality':
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(8,10);
                break;
            case 'extinguishment':
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(6,8);
                break;
            case 'superego':
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(0,2);
                break;
            case 'business':
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(0,2);
                break;
            case 'mirage':
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(6,8);
                break;
            case 'quasi':
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(2,4);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(4,6);
                break;
            case 'conflicting':
                newOrder += baseOrder.slice(12,14);
                newOrder += baseOrder.slice(14,16);
                newOrder += baseOrder.slice(8,10);
                newOrder += baseOrder.slice(10,12);
                newOrder += baseOrder.slice(4,6);
                newOrder += baseOrder.slice(6,8);
                newOrder += baseOrder.slice(0,2);
                newOrder += baseOrder.slice(2,4);
                break;
            case 'identity':
                newOrder = baseOrder;
                break;
            }
            return newOrder;
    }

    function findRelationByType(type1Order, type2Order) {
        if (funPlacement(type1Order, 1) == funPlacement(type2Order, 2) &&
            funPlacement(type1Order, 7) == funPlacement(type2Order, 1)) {
            return 'supervisor';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 7) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 1)) {
            return 'supervisee';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 3) &&
            funPlacement(type1Order, 6) == funPlacement(type2Order, 1)) {
            return 'benefactor';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 6) &&
            funPlacement(type1Order, 3) == funPlacement(type2Order, 1)) {
            return 'beneficiary';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 2) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 1)) {
            return 'mirror';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 3) &&
            funPlacement(type1Order, 3) == funPlacement(type2Order, 1)) {
            return 'activity';
        }
        else if (funPlacement(type1Order, 2) == funPlacement(type2Order, 3) &&
            funPlacement(type1Order, 4) == funPlacement(type2Order, 1)) {
            return 'duality';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 1) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 7)) {
            return 'kindred';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 4) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 6)) {
            return 'partial duality';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 5) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 6)) {
            return 'contrary';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 8) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 7)) {
            return 'superego';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 8) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 2)) {
            return 'business';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 5) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 3)) {
            return 'mirage';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 6) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 5)) {
            return 'quasi-identity';
        }
        else if (funPlacement(type1Order, 1) == funPlacement(type2Order, 7) &&
            funPlacement(type1Order, 2) == funPlacement(type2Order, 8)) {
            return 'conflicting';
        }
        else {
            return 'Identity';
        }
    }

    function funPlacement(typeOrder, funNum) {
        x = (funNum * 2) - 2;
        y = funNum * 2;
        fun = typeOrder.slice(x, y);
        return fun;
    }

    // function for getting cognitive functions of the type
    function getFunctions(type) {        
        switch (type) {
            case 'intp':
                functions = 'TiNeSiFeTeNiSeFi';
                break;
            case 'intj':
                functions = 'NiTeFiSeNeTiFeSi';
                break;
            case 'entj':
                functions = 'TeNiSeFiTiNeSiFe';
                break;
            case 'entp':
                functions = 'NeTiFeSiNiTeFiSe';
                break;
            case 'estj':
                functions = 'TeSiNeFiTiSeNiFe';
                break;
            case 'esfj':
                functions = 'FeSiNeTiFiSeNiTe';
                break;
            case 'istj':
                functions = 'SiTeFiNeSeTiFeNi';
                break;
            case 'isfj':
                functions = 'SiFeTiNeSeFiTeNi';
                break;
            case 'estp':
                functions = 'SeTiFeNiSiTeFiNe';
                break;
            case 'esfp':
                functions = 'SeFiTeNiSiFeTiNe';
                break;
            case 'istp':
                functions = 'TiSeNiFeTeSiNeFi';
                break;
            case 'isfp':
                functions = 'FiSeNiTeFeSiNeTi';
                break;
            case 'enfj':
                functions = 'FeNiSeTiFiNeSiTe';
                break;
            case 'enfp':
                functions = 'NeFiTeSiNiFeTiSe';
                break;
            case 'infj':
                functions = 'NiFeTiSeNeFiTeSi';
                break;
            case 'infp':
                functions = 'FiNeSiTeFeNiSeTi';
                break;
        }
        return functions;
    }

    // function for decoding cognitive functions into correct type again
    function decodeFunctions(newOrder) {        
        if (newOrder == 'TiNeSiFeTeNiSeFi') {
            type = 'intp';
        }
        else if (newOrder == 'NiTeFiSeNeTiFeSi') {
            type = 'intj';
        }
        else if (newOrder == 'TeNiSeFiTiNeSiFe') {
            type = 'entj';
        }
        else if (newOrder == 'NeTiFeSiNiTeFiSe') {
            type = 'entp';
        }
        else if (newOrder == 'TeSiNeFiTiSeNiFe') {
            type = 'estj';
        }
        else if (newOrder == 'FeSiNeTiFiSeNiTe') {
            type = 'esfj';
        }
        else if (newOrder == 'SiTeFiNeSeTiFeNi') {
            type = 'istj';
        }
        else if (newOrder == 'SiFeTiNeSeFiTeNi') {
            type = 'isfj';
        }
        else if (newOrder == 'SeTiFeNiSiTeFiNe') {
            type = 'estp';
        }
        else if (newOrder == 'SeFiTeNiSiFeTiNe') {
            type = 'esfp';
        }
        else if (newOrder == 'TiSeNiFeTeSiNeFi') {
            type = 'istp';
        }
        else if (newOrder == 'FiSeNiTeFeSiNeTi') {
            type = 'isfp';
        }
        else if (newOrder == 'FeNiSeTiFiNeSiTe') {
            type = 'enfj';
        }
        else if (newOrder == 'NeFiTeSiNiFeTiSe') {
            type = 'enfp';
        }
        else if (newOrder == 'NiFeTiSeNeFiTeSi') {
            type = 'infj';
        }
        else {
            type = 'infp';
        }        
        return type;
    }
});