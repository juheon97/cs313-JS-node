function letterConvert(weight) {
    var rate
    if (weight >= 3.5 && weight < 4) {
        rate = 1.45
    }
    else if (weight >= 4 && weight < 5) {
        rate = 1.60
    }
    else if (weight >= 5 && weight < 6) {
        rate = 1.75
    }
    else if (weight >= 4 && weight < 5) {
        rate = 1.90
    }
    else if (weight >= 6 && weight < 7) {
        rate = 2.05
    }
    else if (weight >= 7 && weight < 8) {
        rate = 2.20
    }
    else if (weight >= 8 && weight < 9) {
        rate = 2.35
    }
    else if (weight >= 9 && weight < 10) {
        rate = 2.50
    }
    else if (weight >= 10 && weight < 11) {
        rate = 2.35
    }
    else if (weight >= 11 && weight < 12) {
        rate = 2.65
    }
    else if (weight >= 12  && weight <= 13) {
        rate = 2.80
    }
    return rate;
}

function getFlatsCost(weight, type) {
    var rate
    if (type == "Large Envelopes (Flats)" && weight <= 1){
        rate = 1.00
    }
    else if (type=="Large Envelopes (Flats)" && weight > 1 && weight <=2) {
        rate = 1.15
    }
    else if (type=="Large Envelopes (Flats)" && weight > 2 && weight <=3) {
        rate = 1.30
    }
    else if (type=="Large Envelopes (Flats)" && weight > 3 && weight <=4) {
        rate = 1.45
    }
    else if (type=="Large Envelopes (Flats)" && weight > 4 && weight <=5) {
        rate = 1.60
    }
    else if (type=="Large Envelopes (Flats)" && weight > 5 && weight <=6) {
        rate = 1.75
    }
    else if (type=="Large Envelopes (Flats)" && weight > 6 && weight <=7) {
        rate = 1.90
    }
    else if (type=="Large Envelopes (Flats)" && weight > 7 && weight <=8) {
        rate = 2.05
    }
    else if (type=="Large Envelopes (Flats)" && weight > 8 && weight <=9) {
        rate = 2.20
    }
    else if (type=="Large Envelopes (Flats)" && weight > 9 && weight <=10) {
        rate = 2.35
    }
    else if (type=="Large Envelopes (Flats)" && weight > 10 && weight <=11) {
        rate = 2.50
    }
    else if (type=="Large Envelopes (Flats)" && weight > 11 && weight <=12) {
        rate = 2.65
    }
    else if (type=="Large Envelopes (Flats)" && weight > 12 && weight <=13) {
        rate = 2.80
    }
    return rate
}

function getPackageCost(weight, type) {
    var rate;
    if (type == "First-Class Package Service" && weight <= 4) {
        rate = 3.66
    }
    else if (type == "First-Class Package Service" && weight <= 8 && weight > 4) {
        rate = 4.36
    }
    else if (type == "First-Class Package Service" && weight <= 12 && weight > 8) {
        rate = 5.19
    }
    else if (type == "First-Class Package Service" && weight <= 13 && weight > 12) {
        rate = 5.71
    }
    return rate
}

function getMeteredCost(weight, type) {
    var rate;
    if (type == "Letters (Metered)" && weight <= 1) {
        rate = 0.50
    }
    else if(type == "Letters (Metered)" && weight <= 2 && weight > 1) {
        rate = 0.65
    }
    else if(type == "Letters (Metered)" && weight <= 3 && weight > 2) {   
        rate  = 0.8 
    }
    else if(type == "Letters (Metered)" && weight <= 3.5 && weight > 3) {
        rate = 0.95
    }
    else if(type =="Letters (Metered)" && weight > 3.5) {
        rate = letterConvert(weight)
    }
    return rate;
}

function getStampedCost(weight, type) {
    var rate;
    if (type == "Letters (Stamped)" && weight <= 1) {
        rate = 0.55
    }
    else if(type == "Letters (Stamped)" && weight <= 2 && weight > 1) {
        rate = 0.70
    }
    else if(type == "Letters (Stamped)" && weight <= 3 && weight > 2) {   
        rate  = 0.85   
    }
    else if(type == "Letters (Stamped)" && weight <= 3.5 && weight > 3) {
        rate = 1.00
    }
    else if(type =="Letters (Stamped)" && weight > 3.5) {
        rate = letterConvert(weight)
    }
    return rate;
}

function convertRate(req, res) {
    var type = req.query.postal_option;
    var weight = req.query.weight;
    var rate;
    var condition;
    if (type == "Letters (Stamped)") {
        rate = getStampedCost(weight,type);
    }
    else if(type == "Letters (Metered)") {
        rate = getMeteredCost(weight, type);
    }
    else if (type == "Large Envelopes (Flats)"){
        rate = getFlatsCost(weight, type);
    }
    else if (type == "First-Class Package Service"){
        rate = getPackageCost(weight, type);
    } 

    if ((type == "Letters (Stamped)" || type == "Letters (Metered)") && weight > 3.5) {
        condition = "For weights over 3.5 ounces, it converts to Large Envelopes prices."
    }
    else {
        condition = "";
    }
    var stuff = {type: type, rate: rate, weight: weight, condition: condition};
    res.render('result', stuff);
}

module.exports = {convertRate: convertRate};