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
                who: ['Mike Ashley', 'Labour Party', 'The Guardian'],
                options: [],
                articles:[
                    {
                    category: "News",
                    data: [
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2016/nov/28/sports-direct-auditor-under-investigation-over-companys-family-deal', when: '28/10'},
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2016/nov/28/sports-direct-auditor-under-investigation-over-companys-family-deal', when: '28/10'},
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2016/nov/28/sports-direct-auditor-under-investigation-over-companys-family-deal', when: '28/10'}
                     ]
                    },
                    {
                    category: "Analysis",
                    data: [
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2016/nov/28/sports-direct-auditor-under-investigation-over-companys-family-deal', when: '28/10'},
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2016/nov/28/sports-direct-auditor-under-investigation-over-companys-family-deal', when: '28/10'},
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2016/nov/28/sports-direct-auditor-under-investigation-over-companys-family-deal', when: '28/10'}
                     ]
                    },
                    {
                    category: "Opinions",
                    data: [
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2016/nov/28/sports-direct-auditor-under-investigation-over-companys-family-deal', when: '28/10'},
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2016/nov/28/sports-direct-auditor-under-investigation-over-companys-family-deal', when: '28/10'},
                        {title: 'Sports Direct auditor under investigation', link: 'https://www.theguardian.com/business/2016/nov/28/sports-direct-auditor-under-investigation-over-companys-family-deal', when: '28/10'}
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
