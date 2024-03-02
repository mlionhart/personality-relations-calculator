$(document).ready(function () {
    form1 = $('#form');
    form2 = $('#form2');
    // form2.hide();

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

    // action on button click (find type relation button)
    $('#button').on('click', function () {
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

        if (relation == 'Supervisor' || relation == 'Supervisee' || relation == 'Beneficiary' || relation == 'Benefactor') {
            info = "<h3>" + "Your " + "<span id='special'>" + relation + "</span>" + " is: " + "</h3>" + "<br>" + "<h1 id='specialH1'>" + relationType.toUpperCase() + "</h1>";
        } else {
            info = "<h3>" + "Your " + "<span id='special'>" + relation + "</span>" + " Relation is: " + "</h3>" + "<br>" + "<h1 id='specialH1'>" + relationType.toUpperCase() + "</h1>";
        }


        container.html(info);
        $('.specialH1').css('margin-bottom', '10px');
        $('h3').css('margin-top', '10px');
        $('h3').css('margin-bottom', '-15px');
        $('#specialH1').css('margin-bottom', '10px');
        $('#specialH1').css('font-size', '48px');
        // $('#specialH1').css('font-size', '-=10px');
        container.css('padding', '5px 0');

        content = getContent(relation);

        $('.container2').html(content);
    });


    $('#button2').on('click', function () {
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
        console.log(relation);
        if (relation == 'Supervisor' || relation == 'Supervisee' || relation == 'Beneficiary' || relation == 'Benefactor') {
            info = "<h2>" + "<span id='special2'>" + type2.toUpperCase() + "</span>" + " is Your: " + "</h2>" + "<br>" + "<h1 class='specialH1'>" + "<span id='special'>" + relation + "</span>" + "</h1>";
        } else {
            info = "<h2>" + "<span id='special2'>" + type2.toUpperCase() + "</span>" + " is Your: " + "</h2>" + "<br>" + "<h1 class='specialH1'>" + "<span id='special'>" + relation + "</span>" + " relation" + "</h1>";
        }

        container.html(info);
        $('.specialH1').css('margin-bottom', '10px');
        $('.specialH1').css('font-size', '36px');
        $('#special2').css('font-weight', 'bold');
        // $('.specialH1').css('font-size', '-=10px');
        container.css('padding', '5px 0');
        $('h2').css('margin-top', '10px');
        $('h2').css('margin-bottom', '-15px');
        $('h2').css('font-size', '-=10px');       
        
        content = getContent(relation);
        console.log(content);
        $('.container2').html(content);
    });


    function getContent(relation) {
        switch (relation) {
            case 'Identity':
                content = '<p>Identity relations have easy communication and get to know each other very quickly. However, they may compete over similar strengths</p>';
                break;
            case 'Activity':
                content = '<p>Activity relations feel comfortable being themselves with each other. Relations can be over-stimulating and competitive. May require breaks from each other</p>';
                break;
            case 'Mirror':
                content = '<p>Mirror relations often see eye-to-eye on things. Share many similar functions, and thus many similarities, but may feel the other focuses on less important matters</p>';
                break;
            case 'Kindred':
                content = '<p>With kindred relations, interaction comes easily. You have similar goals in life, but due to your differing creative functions, you will often disagree on the methods of attaining such goals</p>';
                break;
            case 'Business':
                content = '<p>Business relations are after different things in life, but use similar methods of achieving their goals. They can appear very similar, but usually have differing interests</p>';
                break;
            case 'Partial duality':
                content = '<p>With partial duality relations, you both supply each other\'s main need (the inferior function). There is often a high level of attraction, but you can clash in values.</p>';
                break;
            case 'Mirage':
                content = '<p>Mirage relations enjoy each other\'s company, but are never fully satisfied with each other. This relation can lead to stagnancy.</p>';
                break;
            case 'Superego':
                content = '<p>Superego relations often find each other quite fascinating, mysterious and interesting. However, there exists a great difference in values and interests among these two, which can lead to lack of fulfillment in the relation.</p>';
                break;
            case 'Beneficiary':
                content = '<p>Relations of benefit are often likened to an older/younger sibling relationship. The benefactor being the older sibling, and the beneficiary the younger sibling in the analogy</p>';
                break;
            case 'Benefactor':
                content = '<p>Relations of benefit are often likened to an older/younger sibling relationship. The benefactor being the older sibling, and the beneficiary the younger sibling in the analogy</p>';
                break;
            case 'Supervisor':
                content = '<p>Relations of supervision are often likened to a parent/child relationship. The supervisor being the parent, and the supervisee being the child in the analogy.</p>';
                break;
            case 'Supervisee':
                content = '<p>Relations of supervision are often likened to a parent/child relationship. The supervisor being the parent, and the supervisee being the child in the analogy.</p>';
                break;
            case 'Quasi-identity':
                content = '<p>Quasi-identical relations are externally similar, internally different. Although they often have similar interests and work in similar fields, they typically have very different priorities in life and may never agree on how things should be done.</p>';
                break;
            case 'Contrary':
                content = '<p>Contrary relations (aka relations of extinguishment) have a very strong difference in values. This relation is one of confusion, misunderstanding and disagreement. They often see each other as unnecessarily contrary, when this is not the intention.</p>';
                break;
            case 'Conflicting':
                content = '<p>Conflicting relations are seen as the least compatible relation. Both may find each other lacking in areas the other finds most important. Often find each other attractive at first - at least at a distance - but this often goes wrong once they get closer.</p>';
                break;
            case 'Duality':
                content = '<p>Dual relations are seen by some as having the best possibly compatibility. However, this is debated. There is a balancing effect with this duo, and often a high level of attraction and intrigue, albeit some confusion.</p>';
        } // end of switch
        return content;
    }

    // function for finding type relation
    function findRelation(baseOrder, relation) {
        newOrder = '';

        switch (relation) {
            case 'supervisee':
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(12, 14);
                break;
            case 'supervisor':
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(2, 4);
                break;
            case 'benefactor':
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(4, 6);
                break;
            case 'beneficiary':
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(10, 12);
                break;
            case 'mirror':
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(12, 14);
                break;
            case 'activity':
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(10, 12);
                break;
            case 'duality':
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(8, 10);
                break;
            case 'kindred':
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(14, 16);
                break;
            case 'partial duality':
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(8, 10);
                break;
            case 'contrary':
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(6, 8);
                break;
            case 'superego':
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(0, 2);
                break;
            case 'business':
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(0, 2);
                break;
            case 'mirage':
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(6, 8);
                break;
            case 'quasi-identity':
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(2, 4);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(4, 6);
                break;
            case 'conflicting':
                newOrder += baseOrder.slice(12, 14);
                newOrder += baseOrder.slice(14, 16);
                newOrder += baseOrder.slice(8, 10);
                newOrder += baseOrder.slice(10, 12);
                newOrder += baseOrder.slice(4, 6);
                newOrder += baseOrder.slice(6, 8);
                newOrder += baseOrder.slice(0, 2);
                newOrder += baseOrder.slice(2, 4);
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