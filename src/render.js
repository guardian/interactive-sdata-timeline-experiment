import mainTemplate from './src/templates/main.html!text'

import Handlebars from 'handlebars/dist/cjs/handlebars'

export async function render() {

    const template = Handlebars.compile(mainTemplate);
    //TODO retrieve the data from spreadsheet of put it there for experimentation
    const data = {
        years: [ {name:'2013', isActive: true} , {name:'2014'}, {name:'2015'}, {name:'2016'} ],
        events: [
            { when: '2013', isYear: true},
            { 
                when: 'Jul.',
                isActive: true,
                title: 'Discovery that 90% of staff are on zero hour contracts',
                summary: 'Sports Direct\'s entire 20,000 part-time workforce are employed on zero-hour contracts at a time when 2,000 full-time staff are about to cash in bonuses of up to £100,000.',
                who: ['Mike Ashley', 'Labour Party', 'The Guardian'],
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
            { when: 'Aug.',
              title: 'Labour party summit on zero hour contracts',
              summary: 'Workers on zero-hours contracts are being paid £6 an hour less on average than other employees, says Labour. Chuka Umunna, the shadow business secretary, will say wages for workers hired on the controversial terms are 40% lower than for those on typical contracts, as the party holds a "zero-hours summit" in London with major employers and unions.',
              who: ['Chuka Umanna', 'Labour Party'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: 'Zero-hours pay rates \'40% below average\' claims Chuka Umunna', link: 'https://www.theguardian.com/uk-news/2013/aug/20/zero-hours-pay-rates-chuka-umunna', when: '20/08'}
                     ]
                    },
                    {
                    category: "Analysis",
                    data: [
                        {title: 'Mike Ashley: nasty or nice?', link: 'https://www.theguardian.com/football/2014/jan/17/sports-direct-mike-ashley-newcastle-united-profile', when: '17/01'}
                     ]
                    }
                ]

            },
            { when: '2014', isYear: true},
            { when: 'Jul.',
              title: 'Mike Ashley bonus approved',
              summary: 'This represents the end of a two year fight to secure a huge bump in share % for the founder Mike Ashley.',
              who: ['Mike Ashley'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: '60% of shareholders approve Mike Ashley bonus scheme', link: 'https://www.theguardian.com/business/2014/jul/02/sports-direct-meeting-mike-ashley', when: '02/07'}
                     ]
                    }
                ]

            },
            { when: 'Nov.',
              title: 'Labour party publically attack Sports Direct',
              summary: 'Ed Miliband launched an attack on what he calls the “Victorian” working practices of the retail giant Sports Direct over its use of zero-hours contracts.',
              who: ['Ed Milliband', 'Labour Party'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: 'Ed Miliband attacks over zero-hours contracts', link: 'https://www.theguardian.com/politics/2014/nov/15/ed-miliband-sports-direct-zero-hours-contracts', when: '15/11'}
                     ]
                    },
                    {
                    category: "Opinions",
                    data: [
                        {title: 'Sports Direct has lost our custom', link: 'https://www.theguardian.com/business/2014/nov/18/sports-direct-has-lost-our-custom', when: '18/11'}
                     ]
                    }
                ]

            },
            { when: '2015', isYear: true},
            { when: 'Feb.',
              title: 'Mike Ashley called to Westminster',
              summary: 'The Sports Direct founder Mike Ashley is being called before MPs at the House of Commons over the treatment of employees at the company’s USC retail business and the use of zero-hours contracts.',
              who: ['Mike Ashley'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: 'Sports Direct founder called to Westminster over employee treatment', link: 'https://www.theguardian.com/football/2015/feb/18/sports-direct-founder-mike-ashley-westminster-employee-treatment-zero-hours-contracts', when: '18/02'}
                     ]
                    }
                ]
            },
            { when: 'Mar.',
              title: 'Mike Ashley refuses to attend',
              summary: 'The Sports Direct founder Mike Ashley has rebuffed MPs who wanted to grill him over the treatment of staff at the company’s USC retail business in Scotland and the use of zero-hours contracts. The billionaire told MPs it was more appropriate that chief executive David Foley attend the Scottish Affairs committee, which is conducting an investigation into how the business collapsed without any obligations to its staff.',
              who: ['Mike Ashley', 'David Forsey', 'Labour Party'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: 'Sports Direct founder refuses to appear before MPs', link: 'https://www.theguardian.com/football/2015/mar/03/sports-direct-founder-mike-ashley-refuses-to-appear-before-mps', when: '03/03'}
                     ]
                    }
                ]
            },
            { when: 'Sep.',
              title: 'Unite Union protest "disckenian practices"',
              summary: 'Sports Direct has insisted it is “not operating Dickensian practices”, in the face of growing shareholder unrest at Mike Ashley’s sportswear retailer.The company, which has gained notoriety for keeping 20,000 staff on zero-hours contracts and making Ashley a billionaire, robustly defended its treatment of workers at its annual shareholder meeting after strong criticism from activist investor groups.',
              who: ['Unite'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: '', link: 'https://www.theguardian.com/business/2015/sep/09/sports-direct-investors-revolt-against-chairman-and-pay-policy', when: '09/09'}
                     ]
                    },
                    {
                    category: "Opinions",
                    data: [
                        {title: '', link: 'https://www.theguardian.com/commentisfree/2015/sep/08/the-guardian-view-on-sports-direct-big-british-capitalism-at-its-grubbiest', when: '08/09'}
                      ]
                    }
                ]
            },
            { when: 'Oct.',
              title: 'BBC reveal ambulances called to warehouse 80 times in two years',
              summary: 'Ambulances were called to Sports Direct International’s headquarters more than 80 times in two years, according to a report. From January 2013 to December 2014, 76 ambulances or paramedic cars were sent to the postcode for Sports Direct’s distribution centre, according to a Freedom of Information request by the BBC. Another seven ambulance calls were cancelled, the BBC said.',
              who: ['BBC'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: 'Ambulances called to Sports Direct HQ more than 80 times in two years', link: 'https://www.theguardian.com/business/2015/oct/05/ambulances-called-to-sports-direct-hq-more-than-80-times-in-two-years', when: '05/10'}
                     ]
                    }
                ]
            },
            { when: 'Oct.',
              title: 'David Forsey charged over Ayreshite redundancies',
              summary: 'David Forsey, the chief executive of Sports Direct, has been charged with a criminal offence relating to the collapse of its fashion retailer USC.',
              who: ['David Forsey'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: '', link: 'https://www.theguardian.com/business/2015/oct/09/sports-direct-chief-executive-david-forsey-charged-usc-administration', when: '09/10'}
                     ]
                    }
                ]
            },
            { when: 'Dec.',
              title: 'Guardian investigation reveals workers effectively paid lower than minimum wage',
              summary: 'By placing two undercover reporters inside Sports Direct&rsquo;s warehouse, as well as interviewing former employees and speaking with workers about their roles while the journalists were employed on the site, the Guardian has established that many workers are in effect receiving less than the minimum wage per hour, over the total time they are required to spend in the warehouse and after financial penalties.',
              who: ['The Guardian'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: '', link: 'https://www.theguardian.com/business/2015/dec/09/how-sports-direct-effectively-pays-below-minimum-wage-pay', when: '09/12'},
                        {title: '', link: 'https://www.theguardian.com/business/2015/dec/09/sports-direct-staff-shirebrook-strikes-policy-sick-leave', when: '09/12'}
                     ]
                    },
                    {
                    category: "Analysis",
                    data: [
                        {title: '', link: 'https://www.theguardian.com/football/2015/dec/09/mike-ashley-sports-direct-tycoon-empire-profile', when: '09/12'}
                     ]
                    },
                    {
                    category: "Opinions",
                    data: [
                        {title: '', link: 'https://www.theguardian.com/business/2015/dec/11/sports-direct-is-a-reflection-of-the-modern-british-economy', when: '11/12'}
                     ]
                    }
                ]
            },
            { when: 'Dec.',
              title: 'Sports direct issue a review of staff conditions',
              summary: 'Sports Direct is to launch a review of all agency staff terms and conditions, which it said would be overseen personally by its founder Mike Ashley. The move follows a Guardian investigation, which revealed how temporary warehouse workers at Britain’s biggest sportswear chain are subjected to an extraordinary regime of searches and surveillance. Undercover reporters also came up with evidence that thousands of workers were receiving effective hourly rates of pay below the minimum wage.',
              who: ['Sports Direct', 'Mike Ashley'],
              articles:[
                    {
                    category: "News",
                    data: [
                        {title: '', link: 'https://www.theguardian.com/business/2015/dec/09/how-sports-direct-effectively-pays-below-minimum-wage-pay', when: '09/12'}
                     ]
                    },
                    {
                    category: "Analysis",
                    data: [
                        {title: '', link: 'https://www.theguardian.com/business/2015/dec/18/sports-direct-accusations-workers-pay-conditions', when: '18/12'}
                     ]
                    }
                ]
            },
            { when: '2016', isYear: true}
        ]
    };
    return template(data);
}
