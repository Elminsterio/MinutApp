

module.exports = function computoEscala(cuantia) {
    
    let honorariosEsc = 0;
    let cuantiaRestante = cuantia;
    
    function tramo( ref, perc ) {
        
        if (cuantiaRestante - ref > 0) {

        cuantiaRestante -= ref;
        honorariosEsc += ref * perc;
        
        } else if (cuantiaRestante < 0 ) {
            
            return false;

        } else if (cuantiaRestante - ref <= 0 ) {

        honorariosEsc += cuantiaRestante * perc;
        cuantiaRestante -= ref;
        
        }
    }
    
    // 4000

    tramo(4000, 0.25)
    
    // 18000

    tramo(14000, 0.18)

    // 30000

    tramo(12000, 0.16)
    
    // 45000

    tramo(15000, 0.14)

    // 60000
    
    tramo(15000, 0.12)

    // 90000

    tramo(30000, 0.10)

    // 120000

    tramo(30000, 0.09)

    // 180000

    tramo(60000, 0.08)

    // 240000

    tramo(60000, 0.07)

    // 300000

    tramo(60000, 0.06)

    // 450000

    tramo(150000, 0.055)

    // 600000

    tramo(150000, 0.05)

    // 750000

    tramo(150000, 0.045)

    // 900000

    tramo(150000, 0.04)

    // 1050000

    tramo(150000, 0.035)

    // 1200000

    tramo(150000, 0.03)

    // 1500000

    tramo(300000, 0.025)

    // 1800000

    tramo(300000, 0.02)

    // 2100000

    tramo(300000, 0.015)

    // 2400000

    tramo(300000, 0.01)

    // 2700000

    tramo(300000, 0.005)

    return honorariosEsc;

}

