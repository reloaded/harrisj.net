import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {ProjectDetailsModule} from '../../../domain/project-details';
import Project = ProjectDetailsModule.Project;
import {PageService} from '../../../services/page-service/page.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  projects: Project[] = [
    {
      sequenceNumber: 0,
      startDate: moment('2011-02-01'),
      endDate: moment('2012-10-01'),
      name: 'PLAYXPERT',
      slug: 'playxpert',
      location: 'Sandpoint, ID, USA',
      description: 'PLAYXPERT Services is a boutique custom software development consultancy firm specializing in helping entrepreneurs ' +
        'build their vision. More than a work-for-hire firm, PLAYXPERT Services supports customers by developing their brand identity, ' +
        'architecting detailed software specifications, providing creative services, building software architecture and offering ' +
        'strategic technology planning support. With the proper planning in place, PLAYXPERT Services provides software development, ' +
        'payment services, and delivers ongoing hosting & operations support. We take a single vision from a customer and turn it into ' +
        'a working product, deployed and operational.',
      role: 'Software Developer',
      responsibilities: [
        'Full stack developer for consulting contracts.',
        'Provide client technical support.',
        'Support project managers during project specification.',
        'Design and code UI skins for Xfire in-game chat client.'
      ],
      skills: [
        // 'PHP, XHTML, CSS, Javascript, SQL',
        // 'SEO',
        // 'Linux Administration',
        // 'Linux CLI',
        // 'LAMP Installation & Setup',
        // 'MySQL Configuration & Tuning',
        // 'Apache Configuration & Tuning',
        // 'Application Optimization & Debugging Protocols',
        // 'WordPress',
        // 'WordPress custom themes',
        // 'WordPress custom plugins and must-use plugins',
        // 'WordPress filter and action hooks',
        // 'Joomla! (with JomSocial)',
        // 'ZendFramework',
        // 'C#',
        // '.NET Framework',
        // '.NET WCF',
        // 'ASP.NET MVC',
        // 'ASP.NET Web Forms',
        // 'SQL Server',
        // 'Adobe Photoshop',
        // 'SVN, Mercurial & Git'
      ]
    },
    {
      sequenceNumber: 1,
      startDate: moment('2012-10-01'),
      endDate: moment('2015-07-01'),
      name: 'Kochava',
      slug: 'kochava',
      location: 'Sandpoint, ID, USA',
      description: 'Kochava began in 2011 when a team of mobile and gaming professionals saw the need to better understand the feedback ' +
        'loop of user acquisition, engagement, and LTV for mobile applications. Through the process of creating apps for customers from ' +
        'a wide range of industries, we were repeatedly asked if we could shed some light on what media advertising efforts were ' +
        'converting and the effectiveness of their mobile ad spend by partner. Realizing a solution to these questions wasn\'t readily ' +
        'available, we started designing and building a mobile measurement platform that would become Kochava.',
      role: 'Full Stack Developer',
      skills: [
        // 'Nginx setup and high performance tuning',
        // 'Linux networking, kernel and file system tuning',
        // 'Linux CLI',
        // 'SSH Jumpbox',
        // 'Knockout.js',
        // 'AngularJS',
        // 'Phinx',
        // 'Phalcon PHP',
        // 'PHP',
        // 'Handlebars.js',
        // 'Cloud computing',
        // 'Load balancing',
        // 'PHPUnit',
        // 'SAML 2.0',
        // 'Foundation CSS',
        // 'Bower',
        // 'NPM',
        // 'GruntJS',
        // 'PHP OpCache',
        // 'PHP APC',
        // 'NewRelic host integration',
        // 'NewRelic APM integration',
        // 'NewRelic custom metrics integration',
        // 'Linux CRON',
        // 'JavaScript',
        // 'AJAX / XMLHttpRequest',
        // 'jQuery',
        // 'XHTML',
        // 'LESS'
      ],
      achievements: [
        'Optimized LAMP stack PHP web APIs to support ~150,000+ RPM with ~10-100ms response times',
        'Optimized large MySQL databases to support ~150,000+ RPM at < 10 ms response times.',
        'Rolled up terabytes of data by hour, day, week and month on a recurring CRON schedule.',
        'Replaced basic username/password login with SAML 2.0 authentication system',
      ],
      responsibilities: [
        'Full stack developer',
        'Lead frontend developer',
        'Provide near instantaneous technical support for customer support teams',
        'Monitor systems and applications to ensure client SLA',
        'Design and implement new business features to stay relevant in the mobile analytics market',
        'Build SAML 2.0 powered authentication system',
        'Build beautiful charts used by mobile app developers and advertising networks to view ad tracking data',
      ]
    },
    {
      sequenceNumber: 2,
      startDate: moment('2015-08-01'),
      endDate: moment('2016-08-01'),
      name: 'Frontier',
      slug: 'frontier',
      location: 'Everett, WA, USA',
      description: 'Frontier provides high-speed Internet, video, TV & phone services.',
      role: 'Full Stack Developer',
      skills: [
        // 'Microsoft Fakes',
        // 'FakeItEasy',
        // 'MSBuild',
        // '.NET Autofac',
        // 'C# Automapper',
        // 'Dependency Injection',
        // 'Inversion of Control',
        // 'Domain Driven Design',
        // 'IBM DB2',
        // '.NET WCF',
        // 'ASP.NET MVC',
        // 'NuGet',
        // 'Private NuGet Packages',
        // 'Bootstrap 3',
        // 'jQuery',
        // 'Kendo UI',
        // 'LESS',
        // 'CSS',
        // 'Javascript',
        // 'Entity Framework',
        // 'Domain Driven Design',
        // 'Service Oriented Architecture (SOA)',
        // 'TFS',
        // 'TFS Builds'
      ],
      responsibilities: [
        'Maintain and write unit and integration tests using Microsoft Fakes and FakeItEasy',
        'Integrate ASP.NET MVC application with Gulp.js task runner',
        'Replace pre-2013 legacy code running 2008 Kendo UI, jQuery and custom LESS styling with AngularJS and Twitter Bootstrap3',
        'Assist internal WCF API team to address code bugs and fix IBM DB2 query bugs',
        'Integrate .NET WCF services with IBM Enterprise Service Bus (ESB)',
        'Perform development code reviews before merging features and bug patches into master and RC branches',
        'Work with system testers to resolve bugs',
        'Maintain internal provisioning application used by field techs for provisioning ISP hardware and communication services',
      ],
      achievements: [
        'Configured MVC web application CSPROJ to include Gulp.js compiled sources in the deployment package during a MSBuild',
        'Implemented custom CSPROJ targets to trigger `gulp build` and `gulp clean` tasks on project build and clean respectively',
        'Implemented Gulp tasks to concatenate and minify individual Angular templates into one template cache preload Angular module',
        'Implemented Gulp tasks to automatically generate developer documentation in HTML format',
        'Implemented Gulp tasks to compile, concatenate and minify the Angular app Javascript and LESS/CSS',
        'Helped bridge the gap between Frontier\'s system and Verizon\'s landline system during the Verizon acquisition'
      ]
    },
    {
      sequenceNumber: 3,
      startDate: moment('2016-08-01'),
      endDate: moment(),
      name: 'CUneXus',
      slug: 'cunexus',
      location: 'Telecommute',
      description: 'CuneXus Solutions was founded by financial services and technology veterans determined to transform consumer lending ' +
        'by making it possible for lenders to deliver the personalized, automated, mobile customer experience consumers have come to ' +
        'expect, while at the same time helping lenders grow loan volume and revenue by being with consumers as they shop. In 2013 the ' +
        'team released Comprehensive Pre-Screened Lending (CPL) express, or CPLXpress, a first-of-its-kind lending platform that makes ' +
        'it extremely easy for financial institutions to offer pre-approved, \"click-to-accept\" consumer loans to customers where and ' +
        'when they need them–no application necessary. In its first twelve months on the market, the CPLXpress platform was responsible ' +
        'for over $200,000,000 in consumer loans funded.',
      role: 'Senior Software Architect',
      skills: [
        // 'NET Core',
        // 'Entity Framework Core',
        // 'EF Migrations',
        // 'EF Code First',
        // 'EF Fluent API',
        // 'EF Owned Entities',
        // '.NET MVC',
        // 'Powershell',
        // 'Powershell Scripting',
        // 'Bash Scripting',
        // '.NET Core Web API',
        // 'Domain Driven Design',
        // 'S.O.L.I.D. Principles',
        // 'Inversion of Control',
        // 'Dependency Injection',
        // 'RestSharp',
        // 'NewRelic host integration',
        // 'NewRelic APM integration',
        // 'NewRelic custom metrics integration',
        // 'Docker',
        // 'Kubernetes',
        // 'NuGet',
        // 'NPM',
        // 'Azure AKS',
        // 'Azure ACS',
        // 'Azure VNETs',
        // 'Azure Network Adapters',
        // 'Azure CLI',
        // 'Azure DevOps',
        // 'Azure DevOps builds & releases',
        // 'VSTS',
        // 'VSTS builds & releases',
        // 'Private NuGet packages',
        // 'Private NPM packages'
      ],
      responsibilities: [
        'Interview prospective technical employees and contractors',
        'Create a team of driven full stack software developers responsible for building the company\'s SAAS product from the ground up',
        'Design an autonomous fault tolerant SAAS system to replace the company\'s existing production products',
        'Mentor developers of all skill levels on simple and advancted topics such as S.O.L.I.D principles, domain driven design, ' +
        'eventual consistency, microservice architecture vs monolithic, idempotency, domain vs infrastructure vs API layer, ' +
        'bounded contexts, and aggregate transactional consistency',
        'Review every developer\'s pull requests and provide mentoring when needed',
        'Create and manage Azure DevOps (previously VSTS) builds and releases for all environments from staging to production for the ' +
        'new SAAS product',
        'Configure continuous integration (CI) and continuous deployment (CD) to staging environments for the new SAAS product.',
        'Discover the business\'s software domain through collaborative architecture discussions with development and project manager ' +
        'using tools such as whiteboards and Lucidchart for the new SAAS product',
        'Build autonomous microservices with careful attention to transactional boundaries and tolerance of eventual consistency for the ' +
        'new SAAS product',
        'Architect every core and sub-domain for the new SAAS product',
        'Assist Foundation development team from time to time with bug patches and client support calls',
        'Help with various WordPress coding tasks for the company\'s public facing marketing website',
        'Coordinate with the external marketing firm during marketing website deployments and troubleshooting',
        'Create production builds and work with financial institutions to update and troubleshoot our on-premise software installation'
      ],
      achievements: [
        // 'Domain driven design'
      ]
    },
  ];
  selectedProject: Project;
  defaultProjectSequenceNumber: number;

  constructor(public page: PageService, private router: Router, private route: ActivatedRoute) {
    this.page.updateTitle('Where I\'ve Been');
    this.page.allowWebCrawlerIndexing();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('project')) {
        this.defaultProjectSequenceNumber = this.projects
          .find(p => p.slug.toLowerCase() === params.get('project').toLowerCase())
          .sequenceNumber;
      }
    });
  }

  timelineEventSelected(sequenceNumber: number) {
    this.selectedProject = this.projects.find(e => e.sequenceNumber === sequenceNumber);
  }

  timelineEventClicked(sequenceNumber: number) {
    const selectedProject = this.projects.find(e => e.sequenceNumber === sequenceNumber);
    this.router.navigate(['timeline', selectedProject.slug]);
  }
}
