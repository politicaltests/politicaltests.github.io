const rowList = [
           // axisName,	y, 		height
            [ "test",	1, 1, 1, 1, 1, 1, 1 ],

        ] // transform the list into objects containing:
          // axisName, y, height (from above), value (from URL)
        .map(entry => {
            const question = entry[0];
            return {
                olig: entry[1],
                civil: entry[2],
                elit: entry[3],
                preve: entry[4],
                diver: entry[5],
                ruleund: entry[6],
                bestsuit: entry[7],
                disun: entry[8]

            };
        });
