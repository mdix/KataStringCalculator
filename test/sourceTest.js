describe("add()", function() {
    it("called with an empty string", function() {
        expect(add("")).toEqual(0); 
    });
    describe("returns the number", function() {
        it("called with the string '0' returns 0", function() {
            expect(add("0")).toEqual(0);     
        });
        it("called with the string '1' returns 1", function() {
            expect(add("1")).toEqual(1);     
        });
        it("called with the string '7' returns 7", function() {
            expect(add("7")).toEqual(7);     
        }); 
    });
   
    describe("returns the sum of two numbers", function() {
        it("called with the string '2,3' returns the sum (5)", function() {
            expect(add("2,3")).toEqual(5);     
        });   
        it("called with the string '12,90' returns the sum (102)", function() {
            expect(add("12,90")).toEqual(102);     
        });
    });
    
    describe("returns the sum of unknown amount of numbers", function() {
        it("called with the string '12,90,10' returns the sum (112)", function() {
            expect(add("12,90,10")).toEqual(112);     
        });
        it("called with the string '12,90,10,20,50' returns the sum (182)", function() {
            expect(add("12,90,10,20,50")).toEqual(182);     
        });
        it("called with the string '40,1000,10,20,50' returns the sum (1120)", function() {
            expect(add("40,1000,10,20,50")).toEqual(1120);     
        });
    });
    
    describe("returns the sum of numbers divided by a newline", function() {
        it("called with the string '10\n20\n50' returns the sum (80)", function() {
            expect(add("10\n20\n50")).toEqual(80); 
        });
    }); 
   
    describe("returns the sum of numbers divided by a newline and comma (mixed)", function() {
        it("called with the string '10\n20,50,30\n20,10' returns the sum (140)", function() {
            expect(add("10\n20,50,30\n20,10")).toEqual(140); 
        });
    });
    
    describe("uses a custom delimiter", function() {
        it("called with the string '//;\n10;20;30' returns the sum (60)", function() {
            expect(add('//;\n10;20;30')).toEqual(60); 
        });
        it("called with the string '//#\n10#20#30' returns the sum (60)", function() {
            expect(add('//#\n10#20#30')).toEqual(60); 
        }); 
        it("called with the string '//;;;\n10;;;20;;;30' returns the sum (60)", function() {
            expect(add('//;;;\n10;;;20;;;30')).toEqual(60); 
        });
        it("called with the string '//---\n10---20---30' returns the sum (60)", function() {
            expect(add('//---\n10---20---30')).toEqual(60); 
        });
        it("called with the string '//***\n10***20***30' returns the sum (60)", function() {
            expect(add('//***\n10***20***30')).toEqual(60); 
        });
        it("called with the string '//+++\n10+++20+++30' returns the sum (60)", function() {
            expect(add('//+++\n10+++20+++30')).toEqual(60); 
        });
    });
    
    describe("called with a string of (a) negativ(e) number(s)", function() {
        it("like '-1', throws an error", function() {
            expect(function() { add('-1'); }).toThrow(new Error("Negatives not allowed: -1"));
        }); 
        it("like '-1,-5', throws an error", function() {
            expect(function() { add('-1,-5'); }).toThrow(new Error("Negatives not allowed: -1,-5"));
        });
        it("like '-1,-5,-20' throws an error", function() {
            expect(function() { add('-1,-5,-20'); }).toThrow(new Error("Negatives not allowed: -1,-5,-20"));
        });
    });

    describe("called with a number bigger than thousand", function() {
        it("ignores the thousand, like '2,1001' returns 2", function() {
            expect(add("2,1001")).toEqual(2);
        });
        it("ignores the thousand, like '2,1001,5,5000' returns 7", function() {
            expect(add("2,1001,5,5000")).toEqual(7);
        });
        it("ignores the thousand, like '2,1001,5,5000,10,0' returns 17", function() {
            expect(add("2,1001,5,5000,10,0")).toEqual(17);
        });
    });
});
