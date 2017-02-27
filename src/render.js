import mainTemplate from './src/templates/main.html!text'

import Handlebars from 'handlebars/dist/cjs/handlebars'

export async function render() {

    const template = Handlebars.compile(mainTemplate);
    //TODO retrieve the data from spreadsheet of put it there for experimentation
    const data = {
        events: [
            { when: '2013', isYear: true},
            { 
                when: 'July',
                isActive: true,
                title: 'Discovery that 90% of staff are on zero hour contracts',
                summary: 'Sports Direct\'s entire 20,000 part-time workforce are employed on zero-hour contracts at a time when 2,000 full-time staff are about to cash in bonuses of up to £100,000.',
                who: ['Mike Ashley', 'Labour Party', 'The Guardian'],
                options: [],
                articles:[
                    {
                    category: "News",
                    data: [
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2013/jul/28/sports-direct-staff-zero-hour-contracts', when: '28/07'}
                     ]
                    },
                    {
                    category: "Analysis",
                    data: [
                        {title: 'Sports Direct\'s zero-hours contracts may, unfortunately, be here to stay', link: 'https://www.theguardian.com/business/2013/jul/29/sports-direct-zero-hours-contracts-ashley', when: '29/07'}
                     ]
                    },
                    {
                    category: "Opinions",
                    data: [
                        {title: 'Working at Sports Direct is no fairytale for part-timers', link: 'https://www.theguardian.com/commentisfree/2013/jul/29/sports-direct-part-timers-no-bonuses', when: '29/07'}
                     ]
                    }
                ]
            },
            { when: 'August'},
            { when: '2014', isYear: true},
            { when: '2015', isYear: true},
            { when: '2016', isYear: true}
        ]
    };
    return template(data);
}
