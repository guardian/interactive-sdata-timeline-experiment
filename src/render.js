import mainTemplate from './src/templates/main.html!text'

import Handlebars from 'handlebars/dist/cjs/handlebars'

export async function render() {

    const template = Handlebars.compile(mainTemplate);
    //TODO retrieve the data from spreadsheet of put it there for experimentation
    const data = {
        timestamp: [
            { value: '2013', isYear: true},
            { value: 'July', isYear: false, isActive: true},
            { value: 'August', isYear: false},
            { value: '2014', isYear: true},
            { value: '2015', isYear: true},
            { value: '2016', isYear: true}
        ]
    };
    return template(data);
}
