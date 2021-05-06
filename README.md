# Angular Routing

## Objectives

By the end of this lesson you should be able to:

- Define top-level, static routes
- Define top-level routes with params
- Listen to route changes / access params in a component
- Link to routes
- Use router outlets to define where routes go

## Define a top-level route

In `src/app/app-routing.module.ts` add a new object to the `routes` array:

The following route will tell Angular to display the `TermsComponent` when you
visit http://localhost:4200/terms-of-service

```typescript
const routes: Routes = [
  {
    path: 'terms-of-service',
    component: TermsComponent
  },
];
```

NOTE: Don't forget to import the component 😉

## Link to a static route

```html
<a routerLink="terms-of-service">Terms of Service</a>
```

## Dynamic Path Parameters

### Define a route with path parameters

```typescript
const routes: Routes = [
  {
    path: 'something/:someId',
    component: SomeComponent
  },
];
```

### Access Route Params from a Component

1. Inject ActivatedRoute
1. Subscribe to changes in the paramMap

```typescript
constructor(private
route: ActivatedRoute
)
{
}

ngOnInit()
:
void {
  this.route.paramMap.subscribe(params => {
    // here you can access the params defined in the route
    params.get('someId');
  });
}
```

### Link to a route with a dynamic component

1. Add the `routerLink` attribute
1. Surround `[routerLink]` with square brackets
1. Pass in an array

```html
<a [routerLink]="['/something', someVariable]">A dynamic link</a>
```

## Child Routes

### Define a child route

```typescript
const routes: Routes = [
  {
    path: 'list-of-things',
    component: ListComponent,
    children: [
      {
        path: ':thingId',
        component: ShowComponent,
      },
    ]
  },
}
```

### Link to a child route

Same as any dynamic route:

```html
<a [routerLink]="['/list-of-things', someVariable]">A dynamic link</a>
```

### Defining the router outlet

When you nest a route, the parent component must define a router outlet.

```html

<div *ngFor="let thing of things">
  <a [routerLink]="['/list-of-things', thing]">Link</a>
</div>
<router-outlet></router-outlet>
```

## Active Links

```html
<a routerLinkActive="active" routerLink="/something">Somewhere</a>
```

## Resolvers

1. First, generate a resolver:
    ```
    ng generate resolver name
    ```

1. Next, change the `implements` and the return type of `resolve` to be the correct value (in this case, `Person[]`).
1. Then inject the service you want and return the correct value:
    ```typescript
    export class PersonResolver implements Resolve<Person[]> {
      // inject your real service
      constructor(private personService: PersonService) {}
    
      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person[]> {
        return this.personService.findAll(); // replace with your real service call
      }
    }
    ```
1. Add the resolver to the route:
    ```typescript
    const routes: Routes = [
      {
        path: 'people',
        component: PersonListComponent,
        resolve: {
          people: PersonResolver
        }
      },
    ];
    ```
1. Access the data from the component:
    ```typescript
    export class PersonLIstComponent implements OnInit {
      people: Person[] = [];
      
      // inject ActivatedRoute
      constructor(private activatedRoute: ActivatedRoute) { }
    
      ngOnInit(): void {
        // get data from the route snapshot
        this.people = this.activatedRoute.snapshot.data.people;
      }
    }
    ```
