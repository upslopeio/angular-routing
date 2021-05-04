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

The following route will tell Angular to display the `TermsComponent` when you visit http://localhost:4200/terms-of-service

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
constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
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

```
<a [routerLink]="['/something', someVariable]">A dynamic link</a>
```
