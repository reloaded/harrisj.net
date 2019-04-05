import { Injectable } from '@angular/core';
import {Skill, SkillCategory} from './index';

@Injectable({
  providedIn: 'root'
})
export class StaticSkillsService {

  private static readonly tag_dotnet = 'dotnet core net .net framework';
  private static readonly tag_microsoft = 'ms m$ microsoft';
  private static readonly tag_kubernetes = 'kubernetes k8s kubectl kubeadm control plane orchestration';
  private static readonly tag_containers = 'containers container containerized containerization virtualization';
  private static readonly tag_docker = 'docker dockerfile windows linux';
  private static readonly tag_cloud = 'cloud hosting computing service';
  private static readonly tag_azure = 'azure az cli aks acs';
  private static readonly tag_vm = 'virutal machine virtualization virtualized';
  private static readonly tag_devops = 'devops developer operation operations';
  private static readonly tag_vsts = 'visual studio online vsts tfs azuredevops azure dev ops';
  private static readonly tag_cicd = 'continuous integration ci deploy deployment cd';
  private static readonly tag_package_manager = 'package managers manager private';
  private static readonly tag_unit_tests = 'unit testing test tests integration automated';
  private static readonly tag_di = 'di dependency injection ioc inversion of control inject';
  private static readonly tag_third_party = 'library third party open source';
  private static readonly tag_css = 'css css1 css2 css3 cascading style sheet sheets stylesheets';
  private static readonly tag_less_css = 'less leaner less.js';
  private static readonly tag_scss = 'scss sass syntactically awesome';
  private static readonly tag_grid = 'grid responsive mobile first media queries';
  private static readonly tag_js = 'javascript js java script typescript ts ecma';
  private static readonly tag_aws = 'amzn amazon aws web services ec2 s3 cloudfront cloud front ses';
  private static readonly tag_cdn = 'content delivery network cdn storage bucket';
  private static readonly tag_sso = 'single sign on sso identity authentication authorization auth';
  private static readonly tag_saml = 'saml security assertion markup language 2.0 identity provider';
  private static readonly tag_oauth = 'oauth bearer token';
  private static readonly tag_php = 'php hypertext preprocessor';
  private static readonly tag_orm = 'object relational mapper orm';
  private static readonly tag_ef = 'entity framework ef efcore entities';
  private static readonly tag_db_migrations = 'migrations db';
  private static readonly tag_mvc = 'mvc model view controller mvvm';
  private static readonly tag_db = 'database db data base persistence store';
  private static readonly tag_sql = 'sql transaction';
  private static readonly tag_graphic = 'graphic design designer mock up';

  constructor() { }

  allSkills(): Skill[] {
    const categories = this.allCategories();
    const skills: Skill[] = [];

    this._addSingleSignOnSkills(skills, categories);
    this._addMicrosoftSkills(skills, categories);
    this._addContainerSkills(skills, categories);
    this._addHtmlSkills(skills, categories);
    this._addPhpSkills(skills, categories);
    this._addCmsSkills(skills, categories);
    this._addDatabaseSkills(skills, categories);
    this._addPackageManagerSkills(skills, categories);
    this._addDevOpsSkills(skills, categories);
    this._addTranspilerSkills(skills, categories);
    this._addLinuxSkills(skills, categories);
    this._addMonitoringSkills(skills, categories);
    this._addCloudSkills(skills, categories);
    this._addGraphicSkills(skills, categories);

    return skills;
  }

  allCategories(): SkillCategory[] {
    return [
      {
        id: 'microsoft',
        name: '.NET',
        keywords: [
          StaticSkillsService.tag_microsoft,
        ]
      },
      {
        id: 'monitoring',
        name: 'Monitoring',
        keywords: [
          'monitoring application performance cpu ram host',
        ]
      },
      {
        id: 'cloud',
        name: 'Cloud',
        keywords: [
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_azure,
          StaticSkillsService.tag_aws,
        ]
      },
      {
        id: 'container',
        name: 'Container',
        keywords: [
          'docker',
          'containers container containerized containerization virtualization',
          'kube k8s kubernetes',
          'orchestration',
          'scale cloud'
        ]
      },
      {
        id: 'html',
        name: 'HTML',
        keywords: [
          'html html5 browser'
        ]
      },
      {
        id: 'php',
        name: 'PHP',
        keywords: [
          'php hypertext preprocessor'
        ]
      },
      {
        id: 'cms',
        name: 'CMS',
        keywords: [
          'blog blogger bloggers',
          'content management system systems cms'
        ]
      },
      {
        id: 'database',
        name: 'Database',
        keywords: [
          StaticSkillsService.tag_db
        ]
      },
      {
        id: 'package-managers',
        name: 'Package Managers',
        keywords: [
          'package managers manager private',
        ]
      },
      {
        id: 'devops',
        name: 'DevOps',
        keywords: [
          'dev ops devops developer operation operations',
          'continuous integration ci deploy deployment cd',
        ]
      },
      {
        id: 'transpilers',
        name: 'Transpilers',
        keywords: [
          'html html5',
          'css css1 css2 css3 scss less',
          'javascript js java script typescript ts ecma',
          'transpile transpiler transpilers bundler bundlers loader loaders task tasks runner runners'
        ]
      },
      {
        id: 'linux',
        name: 'Linux',
        keywords: [
          'linux ubuntu debian alpine redhat rhel mint kali',
          'shell sh bash'
        ]
      },
      {
        id: 'sso',
        name: 'Single Sign On',
        keywords: [
          StaticSkillsService.tag_sso,
          StaticSkillsService.tag_saml,
        ]
      },
      {
        id: 'graphic',
        name: 'Graphic Design',
        keywords: [
          StaticSkillsService.tag_graphic,
        ]
      },
    ];
  }

  private _addLinuxSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'linux');

    skills.push(
      {
        id: `${category.id}-bash`,
        name: 'Bash',
        keywords: this._parsekeywords([
          'linux ubuntu debian alpine redhat rhel mint kali',
          'shell sh bash',
        ]),
        category: category
      },
      {
        id: `${category.id}-ssh-jumpbox`,
        name: 'SSH Jumpbox',
        keywords: this._parsekeywords([
          'linux ubuntu debian alpine redhat rhel mint kali',
          'shell sh bash',
          'ssh jump box jumpbox',
        ]),
        category: category
      },
      {
        id: `${category.id}-cron`,
        name: 'CRON',
        keywords: this._parsekeywords([
          'linux ubuntu debian alpine redhat rhel mint kali',
          'shell sh bash',
          'cron job cronjob',
        ]),
        category: category
      },
      {
        id: `${category.id}-nginx`,
        name: 'NGINX',
        keywords: this._parsekeywords([
          'linux ubuntu debian alpine redhat rhel mint kali',
          'nginx web server http',
        ]),
        category: category
      },
      {
        id: `${category.id}-apache`,
        name: 'Apache',
        keywords: this._parsekeywords([
          'linux ubuntu debian alpine redhat rhel mint kali',
          'apache web server http',
        ]),
        category: category
      },
    );
  }

  private _addMicrosoftSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'microsoft');

    skills.push(
      {
        id: `${category.id}-csharp`,
        name: 'C#',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          'c# c-sharp csharp sharp',
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-dotnet-core`,
        name: '.NET Core',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_mvc,
          '2.0 2.1 2.2 4.x 4.6 4.5',
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-dotnet-web-api`,
        name: 'ASP.NET Core Web Api',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_mvc,
          'asp web api webapi rest restful json http',
        ]),
        category: category,
      },
      {
        id: `${category.id}-dotnet-mvc`,
        name: '.NET MVC',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          'asp web api webapi rest restful json http',
          StaticSkillsService.tag_mvc,
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-aspforms`,
        name: 'ASP.NET Forms',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          'asp forms web api webapi http',
          StaticSkillsService.tag_mvc,
        ]),
        category: category,
      },
      {
        id: `${category.id}-dotnet-wcf`,
        name: '.NET WCF',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          'windows communication foundation wcf',
        ]),
        category: category,
      },
      {
        id: `${category.id}-ef-core`,
        name: 'Entity Framework Core',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_ef,
          StaticSkillsService.tag_orm,
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-ef-migrations`,
        name: 'EF Core Migrations',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_ef,
          StaticSkillsService.tag_orm,
          StaticSkillsService.tag_db_migrations,
        ]),
        category: category,
      },
      {
        id: `${category.id}-ef-code-first`,
        name: 'EF Core Code First',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_ef,
          StaticSkillsService.tag_orm,
          StaticSkillsService.tag_db_migrations,
        ]),
        category: category,
      },
      {
        id: `${category.id}-ef-fluent-api`,
        name: 'EF Core Fluent API',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_ef,
          StaticSkillsService.tag_orm,
          StaticSkillsService.tag_db_migrations,
        ]),
        category: category,
      },
      {
        id: `${category.id}-ef-owned-entities`,
        name: 'EF Core Owned Entities',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_ef,
          StaticSkillsService.tag_orm,
          StaticSkillsService.tag_db_migrations,
        ]),
        category: category,
      },
      {
        id: `${category.id}-xunit`,
        name: 'XUnit',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_third_party,
          StaticSkillsService.tag_unit_tests,
          'xunit fact',
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-moq`,
        name: 'MOQ',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_unit_tests,
          StaticSkillsService.tag_third_party,
          'moq',
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-fakeiteasy`,
        name: 'FakeItEasy',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_unit_tests,
          'fakeiteasy fake it easy',
          StaticSkillsService.tag_third_party,
        ]),
        category: category
      },
      {
        id: `${category.id}-ms-fakes`,
        name: 'Microsoft Fakes',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_unit_tests,
          'fakeiteasy fake it easy',
          StaticSkillsService.tag_third_party,
        ]),
        category: category
      },
      {
        id: `${category.id}-autofac`,
        name: 'Autofac',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_di,
        ]),
        category: category
      },
      {
        id: `${category.id}-automapper`,
        name: 'AutoMapper',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_orm,
          'automapper',
          StaticSkillsService.tag_third_party,
        ]),
        category: category
      },
      {
        id: `${category.id}-restsharp`,
        name: 'RestSharp',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          'rest sharp restsharp',
          'http web api json xml',
          StaticSkillsService.tag_third_party,
        ]),
        category: category,
      },
      {
        id: `${category.id}-powershell-core`,
        name: 'PowerShell Core',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_microsoft,
          'powershell power shell core scripting cross platform cmd lets cmdlets 6.0',
        ]),
        category: category,
      },
    );
  }

  private _addContainerSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'container');

    skills.push(
      {
        id: `${category.id}-docker`,
        name: 'Docker',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_docker,
          StaticSkillsService.tag_containers,
          StaticSkillsService.tag_vm,
          'devops dev ops',
          'on-prem on-premise premise',
          'scale cloud',
          'deploy deployment deployments',
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-k8s`,
        name: 'Kubernetes',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_docker,
          StaticSkillsService.tag_kubernetes,
          StaticSkillsService.tag_vm,
          'devops dev ops',
          'aks',
          'discovery',
          'on-prem on-premise premise',
          'scale cloud',
          'deploy deployment deployments',
          StaticSkillsService.tag_containers,
        ]),
        category: category,
        preferred: true
      }
    );
  }

  private _addHtmlSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'html');

    skills.push(
      {
        id: `${category.id}-seo`,
        name: 'SEO',
        keywords: this._parsekeywords([
          'html html5 xhtml',
          'seo search engine optimization ad revenue',
        ]),
        category: category,
      },
      {
        id: `${category.id}-html5`,
        name: 'HTML5',
        keywords: this._parsekeywords([
          'html html5 xhtml',
          'mobile',
          'mobile-first',
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-angular`,
        name: 'Angular',
        keywords: this._parsekeywords([
          'html html5',
          'angular angular5 angularjs angular.js',
          'model view view-model',
          'rxjs observables',
          StaticSkillsService.tag_js,
          'mvc model view controller',
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-angularjs`,
        name: 'Angular.js',
        keywords: this._parsekeywords([
          'html html5',
          'angular angular5 angularjs angular.js',
          'model view view-model',
          'rxjs observables',
          StaticSkillsService.tag_js,
          'mvc model view controller',
        ]),
        category: category,
      },
      {
        id: `${category.id}-ajax`,
        name: 'AJAX / XMLHttpRequest',
        keywords: this._parsekeywords([
          'html html5',
          'angular angular5 angularjs angular.js',
          'rxjs observables',
          StaticSkillsService.tag_js,
          'mvc model view controller',
          'ajax xml http request xmlhttprequest'
        ]),
        category: category
      },
      {
        id: `${category.id}-typescript`,
        name: 'Typescript / Javascript',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_js,
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-handlebarsjs`,
        name: 'Handlebars.js',
        keywords: this._parsekeywords([
          'javascript js java script typescript ts ecma',
          'model view view-model',
          'handlebars handlebarsjs handlebar.js templating'
        ]),
        category: category
      },
      {
        id: `${category.id}-knockoutjs`,
        name: 'Knockout.js',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_js,
          'model view view-model',
          'knockoutjs knockout knockout.js templating'
        ]),
        category: category
      },
      {
        id: `${category.id}-kendoui`,
        name: 'Kendo UI',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_js,
          'kendo ui kendoui telerik'
        ]),
        category: category
      },
      {
        id: `${category.id}-jquery`,
        name: 'jQuery',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_js,
          'jq jquery jqueryjs jquery.js'
        ]),
        category: category
      },
      {
        id: `${category.id}-scss`,
        name: 'SCSS',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_css,
          StaticSkillsService.tag_scss,
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-less`,
        name: 'LESS',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_less_css,
          StaticSkillsService.tag_css,
        ]),
        category: category
      },
      {
        id: `${category.id}-bootstrap`,
        name: 'Bootstrap',
        keywords: this._parsekeywords([
          'bootstrap bs 3 4 BootstrapCDN',
          StaticSkillsService.tag_scss,
          StaticSkillsService.tag_less_css,
          StaticSkillsService.tag_css,
          StaticSkillsService.tag_grid,
        ]),
        category: category,
        preferred: true
      },
      {
        id: `${category.id}-zurb-foundation`,
        name: 'Zurb Foundation',
        keywords: this._parsekeywords([
          'zurb foundation',
          StaticSkillsService.tag_less_css,
          StaticSkillsService.tag_scss,
          StaticSkillsService.tag_grid,
          StaticSkillsService.tag_css,
        ]),
        category: category
      },
    );
  }

  private _addPhpSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'php');

    skills.push(
      {
        id: `${category.id}-zf`,
        name: 'ZendFramework',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_php,
          StaticSkillsService.tag_mvc,
          'zend framework zf',
        ]),
        category: category
      },
      {
        id: `${category.id}-phpunit`,
        name: 'PHPUnit',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_php,
          StaticSkillsService.tag_unit_tests,
          'phpunit',
        ]),
        category: category,
      },
      {
        id: `${category.id}-doctrine`,
        name: 'Doctrine',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_php,
          StaticSkillsService.tag_orm,
        ]),
        category: category,
      },
      {
        id: `${category.id}-phinx`,
        name: 'Phinx',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_php,
          StaticSkillsService.tag_orm,
          StaticSkillsService.tag_db_migrations,
        ]),
        category: category,
      },
      {
        id: `${category.id}-phalcon`,
        name: 'Phalcon',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_php,
          StaticSkillsService.tag_orm,
          StaticSkillsService.tag_db_migrations,
          'phalcon framework',
          StaticSkillsService.tag_mvc,
        ]),
        category: category
      },
      {
        id: `${category.id}-laravel`,
        name: 'Laravel',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_php,
          StaticSkillsService.tag_orm,
          'laravel framework',
          StaticSkillsService.tag_mvc,
        ]),
        category: category
      },
      {
        id: `${category.id}-symfony`,
        name: 'Symfony',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_php,
          'symfony framework',
          StaticSkillsService.tag_mvc,
        ]),
        category: category
      },
      {
        id: `${category.id}-opcache`,
        name: 'PHP OpCache',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_php,
          'op cache opcache apc'
        ]),
        category: category
      },
    );
  }

  private _addCmsSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'cms');

    skills.push(
      {
        id: `${category.id}-wordpress`,
        name: 'WordPress',
        keywords: this._parsekeywords([
          'php hypertext preprocessor',
          'wordpress wp hooks filters actions plugin theme',
          'blog blogger',
          'content management system cms'
        ]),
        category: category
      },
      {
        id: `${category.id}-joomla`,
        name: 'Joomla!',
        keywords: this._parsekeywords([
          'php hypertext preprocessor',
          'joomla joomla!',
          'blog blogger',
          'content management system cms',
          'mvc model view controller'
        ]),
        category: category
      }
    );
  }

  private _addDatabaseSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'database');

    skills.push(
      {
        id: `${category.id}-redis`,
        name: 'Redis',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_db,
          'redis cache key value store key-value'
        ]),
        category: category
      },
      {
        id: `${category.id}-mongodb`,
        name: 'MongoDB',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_db,
          'mongo mongodb document json'
        ]),
        category: category
      },
      {
        id: `${category.id}-mysql`,
        name: 'MySQL',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_db,
          StaticSkillsService.tag_sql,
          'mysql percona',
        ]),
        category: category
      },
      {
        id: `${category.id}-sql-server`,
        name: 'SQL Server',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_db,
          StaticSkillsService.tag_sql,
          'server mssql transact transact-sql'

        ]),
        category: category
      }
    );
  }

  private _addPackageManagerSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'package-managers');

    skills.push(
      {
        id: `${category.id}-nuget`,
        name: 'NuGet',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_dotnet,
          StaticSkillsService.tag_package_manager,
          'nuget myget'
        ]),
        category: category,
      },
      {
        id: `${category.id}-composer`,
        name: 'Composer',
        keywords: this._parsekeywords([
          'php hypertext preprocessor',
          StaticSkillsService.tag_package_manager,
          'composer composer-php myget'
        ]),
        category: category,
      },
      {
        id: `${category.id}-npm`,
        name: 'NPM',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_package_manager,
          'javascript js java script typescript ts ecma',
          'npm node package manager nodejs node js'
        ]),
        category: category,
      },
      {
        id: `${category.id}-bower`,
        name: 'Bower',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_package_manager,
          'javascript js java script typescript ts ecma',
          'bower'
        ]),
        category: category,
      }
    );
  }

  private _addDevOpsSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'devops');

    skills.push(
      {
        id: `${category.id}-azure-devops`,
        name: 'Azure DevOps / VSTS',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_azure,
          StaticSkillsService.tag_devops,
          StaticSkillsService.tag_vsts,
          StaticSkillsService.tag_cicd,
        ]),
        category: category,
      },
      {
        id: `${category.id}-azure-devops-build-release`,
        name: 'Azure Build & Release',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_azure,
          StaticSkillsService.tag_devops,
          StaticSkillsService.tag_vsts,
          StaticSkillsService.tag_cicd,
        ]),
        category: category,
      },
      {
        id: `${category.id}-azure-devops-cicd`,
        name: 'CI/CD Pipelines',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_azure,
          StaticSkillsService.tag_devops,
          StaticSkillsService.tag_vsts,
          StaticSkillsService.tag_cicd,
        ]),
        category: category,
      },
      {
        id: `${category.id}-tfs`,
        name: 'TFS',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_azure,
          StaticSkillsService.tag_devops,
          StaticSkillsService.tag_vsts,
          StaticSkillsService.tag_cicd,
        ]),
        category: category,
      }
    );
  }

  private _addTranspilerSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'transpilers');

    skills.push(
      {
        id: `${category.id}-gulpjs`,
        name: 'Gulp.js',
        keywords: this._parsekeywords([
          'html html5',
          'css css1 css2 css3 scss less',
          'javascript js java script typescript ts ecma',
          'transpile transpiler transpilers bundler bundlers loader loaders task tasks runner runners',
          'gulp gulp.js gulpjs'
        ]),
        category: category
      },
      {
        id: `${category.id}-gruntjs`,
        name: 'Grunt.js',
        keywords: this._parsekeywords([
          'html html5',
          'css css1 css2 css3 scss less',
          'javascript js java script typescript ts ecma',
          'transpile transpiler transpilers bundler bundlers loader loaders task tasks runner runners',
          'grunt grunt.js gruntjs'
        ]),
        category: category
      },
      {
        id: `${category.id}-webpack`,
        name: 'Webpack',
        keywords: this._parsekeywords([
          'html html5',
          'css css1 css2 css3 scss less',
          'javascript js java script typescript ts ecma',
          'transpile transpiler transpilers bundler bundlers loader loaders task tasks runner runners',
          'webpack web pack'
        ]),
        category: category,
      },
    );
  }

  private _addMonitoringSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'monitoring');

    skills.push(
      {
        id: `${category.id}-newrelic`,
        name: 'New Relic',
        keywords: this._parsekeywords([
          'new relic newrelic apm host',
          'kubernetes k8s',
          'monitoring system application performance host ram cpu usage',
        ]),
        category: category
      },
    );
  }

  private _addCloudSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'cloud');

    skills.push(
      {
        id: `${category.id}-aks`,
        name: 'Azure Kubernetes Service (AKS)',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_kubernetes,
          StaticSkillsService.tag_docker,
          StaticSkillsService.tag_vm,
          StaticSkillsService.tag_containers,
          StaticSkillsService.tag_azure,
          StaticSkillsService.tag_cloud,
        ]),
        category: category
      },
      {
        id: `${category.id}-acs`,
        name: 'Azure Container Service (ACS)',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_azure,
          StaticSkillsService.tag_kubernetes,
          StaticSkillsService.tag_vm,
          StaticSkillsService.tag_docker,
          StaticSkillsService.tag_containers,
          StaticSkillsService.tag_cloud,
        ]),
        category: category
      },
      {
        id: `${category.id}-cli`,
        name: 'Azure CLI',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_azure,
          StaticSkillsService.tag_kubernetes,
          StaticSkillsService.tag_vm,
          StaticSkillsService.tag_docker,
          StaticSkillsService.tag_containers,
          StaticSkillsService.tag_cloud,
        ]),
        category: category
      },
      {
        id: `${category.id}-vm`,
        name: 'Azure VM',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_azure,
          StaticSkillsService.tag_kubernetes,
          StaticSkillsService.tag_docker,
          StaticSkillsService.tag_vm,
          StaticSkillsService.tag_containers,
          StaticSkillsService.tag_cloud,
        ]),
        category: category
      },
      {
        id: `${category.id}-ec2`,
        name: 'AWS EC2',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_aws,
          StaticSkillsService.tag_vm,
          StaticSkillsService.tag_cloud,
        ]),
        category: category
      },
      {
        id: `${category.id}-s3`,
        name: 'AWS S3',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_aws,
          StaticSkillsService.tag_cdn,
          StaticSkillsService.tag_cloud,
        ]),
        category: category
      },
      {
        id: `${category.id}-cloudfront`,
        name: 'AWS CloudFront',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_aws,
          StaticSkillsService.tag_cdn,
          StaticSkillsService.tag_cloud,
        ]),
        category: category
      },
      {
        id: `${category.id}-ses`,
        name: 'AWS SES',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_aws,
          StaticSkillsService.tag_cloud,
          'simple email service smtp',
        ]),
        category: category
      },
      {
        id: `${category.id}-load-balance`,
        name: 'Load Balancing',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_aws,
          StaticSkillsService.tag_cloud,
          StaticSkillsService.tag_microsoft,
          StaticSkillsService.tag_azure,
          'lb load balancer balancing horizontal scale'
        ]),
        category: category
      },
    );
  }

  private _addSingleSignOnSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'sso');

    skills.push(
      {
        id: `${category.id}-saml20`,
        name: 'SAML 2.0',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_sso,
          StaticSkillsService.tag_saml,
        ]),
        category: category
      },
      {
        id: `${category.id}-oauth`,
        name: 'OAuth',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_sso,
          StaticSkillsService.tag_oauth,
        ]),
        category: category
      },
    );
  }

  private _addGraphicSkills(skills: Skill[], categories: SkillCategory[]) {
    const category = this._category(categories, 'graphic');

    skills.push(
      {
        id: `${category.id}-photoshop`,
        name: 'Adobe Photoshop',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_graphic,
          'adobe photoshop ps cs6 master collection',
        ]),
        category: category
      },
      {
        id: `${category.id}-balsamiq`,
        name: 'Balsamiq Mockups',
        keywords: this._parsekeywords([
          StaticSkillsService.tag_graphic,
          'balsamiq mockups sketch',
        ]),
        category: category
      },
    );
  }

  private _category(categories: SkillCategory[], id: string): SkillCategory {
    return categories.find(c => c.id.toLowerCase() === id.toLowerCase());
  }

  private _parsekeywords(strings: string[]): string[] {
    let keywords = [];
    strings.forEach(s => keywords = keywords.concat(s.split(' ')));
    return keywords;
  }

}
