const rowList = [
           // axisName,	y, 		height
            [ "test",	1, 1, 1, 1, 1, 1, 1 ],

        ] // transform the list into objects containing:
          // axisName, y, height (from above), value (from URL)
        .map(ary) {
            const question = ary[0];
            return {
                olig: ary[1],
                civil: ary[2],
                elit: ary[3],
                preve: ary[4],
                diver: ary[5],
                ruleund: ary[6],
                bestsuit: ary[7],
                disun: ary[8]

            };
        });
