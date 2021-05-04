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
