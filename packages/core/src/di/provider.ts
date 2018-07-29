/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Type} from '../type';

/**
 * Configures the `Injector` to return a value for a token.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ValueSansProvider'}
 *
 * @experimental
 */
export interface ValueSansProvider {
  /**
   * The value to inject.
   */
  useValue: any;
}

/**
<<<<<<< HEAD
 * @usageNotes
 * ```
 * @Injectable(SomeModule, {useValue: 'someValue'})
 * class SomeClass {}
 * ```
 *
 * @description
 * For more details, see the {@linkDocs guide/dependency-injection "Dependency Injection Guide"}.
 *
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ValueSansProvider'}
 *
 * @experimental
 */
export interface ValueSansProvider {
  /**
   * The value to inject.
   */
  useValue: any;
}

/**
 * @whatItDoes Configures the {@link Injector} to return a value for a token.
 * @howToUse
 * ```
 * const provider: ValueProvider = {provide: 'someToken', useValue: 'someValue'};
 * ```
 *
 * @description
=======
>>>>>>> 6a797d540169ce979048e30abc619d4c6eaf7b1d
 * Configures the `Injector` to return a value for a token.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ValueProvider'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 */
export interface ValueProvider extends ValueSansProvider {
  /**
   * An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`).
   */
  provide: any;

  /**
   * If true, then injector returns an array of instances. This is useful to allow multiple
   * providers spread across many files to provide configuration information to a common token.
   */
  multi?: boolean;
}

/**
 * Configures the `Injector` to return an instance of `useClass` for a token.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='StaticClassSansProvider'}
 *
 * @experimental
 */
export interface StaticClassSansProvider {
  /**
   * An optional class to instantiate for the `token`. (If not provided `provide` is assumed to be a
   * class to instantiate)
   */
  useClass: Type<any>;

  /**
   * A list of `token`s which need to be resolved by the injector. The list of values is then
   * used as arguments to the `useClass` constructor.
   */
  deps: any[];
}

/**
<<<<<<< HEAD
 * @usageNotes
 * ```
 * @Injectable(SomeModule, {useClass: MyService, deps: []})
 * class MyService {}
 * ```
 *
 * @description
 * For more details, see the {@linkDocs guide/dependency-injection "Dependency Injection Guide"}.
 *
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='StaticClassSansProvider'}
 *
 * @experimental
 */
export interface StaticClassSansProvider {
  /**
   * An optional class to instantiate for the `token`. (If not provided `provide` is assumed to be a
   * class to instantiate)
   */
  useClass: Type<any>;

  /**
   * A list of `token`s which need to be resolved by the injector. The list of values is then
   * used as arguments to the `useClass` constructor.
   */
  deps: any[];
}

/**
 * @whatItDoes Configures the {@link Injector} to return an instance of `useClass` for a token.
 * @howToUse
 * ```
 * @Injectable()
 * class MyService {}
 *
 * const provider: ClassProvider = {provide: 'someToken', useClass: MyService, deps: []};
 * ```
 *
 * @description
=======
>>>>>>> 6a797d540169ce979048e30abc619d4c6eaf7b1d
 * Configures the `Injector` to return an instance of `useClass` for a token.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='StaticClassProvider'}
 *
 * Note that following two providers are not equal:
 *
 * {@example core/di/ts/provider_spec.ts region='StaticClassProviderDifference'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 */
export interface StaticClassProvider extends StaticClassSansProvider {
  /**
   * An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`).
   */
  provide: any;

  /**
   * If true, then injector returns an array of instances. This is useful to allow multiple
   * providers spread across many files to provide configuration information to a common token.
   */
  multi?: boolean;
}

/**
 * Configures the `Injector` to return an instance of a token.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Injectable(SomeModule, {deps: []})
 * class MyService {}
 * ```
 *
 * @experimental
 */
export interface ConstructorSansProvider {
  /**
   * A list of `token`s which need to be resolved by the injector. The list of values is then
   * used as arguments to the `useClass` constructor.
   */
  deps?: any[];
}

/**
<<<<<<< HEAD
 * @usageNotes
 * ```
 * @Injectable(SomeModule, {deps: []})
 * class MyService {}
 * ```
 *
 * @description
 * For more details, see the {@linkDocs guide/dependency-injection "Dependency Injection Guide"}.
 *
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ConstructorSansProvider'}
 *
 * @experimental
 */
export interface ConstructorSansProvider {
  /**
   * A list of `token`s which need to be resolved by the injector. The list of values is then
   * used as arguments to the `useClass` constructor.
   */
  deps?: any[];
}

/**
 * @whatItDoes Configures the {@link Injector} to return an instance of a token.
 * @howToUse
 * ```
 * @Injectable()
 * class MyService {}
 *
 * const provider: ClassProvider = {provide: MyClass, deps: []};
 * ```
 *
 * @description
=======
>>>>>>> 6a797d540169ce979048e30abc619d4c6eaf7b1d
 * Configures the `Injector` to return an instance of a token.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ConstructorProvider'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 */
export interface ConstructorProvider extends ConstructorSansProvider {
  /**
   * An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`).
   */
  provide: Type<any>;

  /**
   * If true, then injector returns an array of instances. This is useful to allow multiple
   * providers spread across many files to provide configuration information to a common token.
   */
  multi?: boolean;
}

/**
 * Configures the `Injector` to return a value of another `useExisting` token.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ExistingSansProvider'}
 */
export interface ExistingSansProvider {
  /**
   * Existing `token` to return. (equivalent to `injector.get(useExisting)`)
   */
  useExisting: any;
}

/**
<<<<<<< HEAD
 * @usageNotes
 * ```
 * @Injectable(SomeModule, {useExisting: 'someOtherToken'})
 * class SomeClass {}
 * ```
 *
 * @description
 * For more details, see the {@linkDocs guide/dependency-injection "Dependency Injection Guide"}.
 *
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ExistingSansProvider'}
 *
 * @stable
 */
export interface ExistingSansProvider {
  /**
   * Existing `token` to return. (equivalent to `injector.get(useExisting)`)
   */
  useExisting: any;
}

/**
 * @whatItDoes Configures the {@link Injector} to return a value of another `useExisting` token.
 * @howToUse
 * ```
 * const provider: ExistingProvider = {provide: 'someToken', useExisting: 'someOtherToken'};
 * ```
 *
 * @description
=======
>>>>>>> 6a797d540169ce979048e30abc619d4c6eaf7b1d
 * Configures the `Injector` to return a value of another `useExisting` token.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ExistingProvider'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 */
export interface ExistingProvider extends ExistingSansProvider {
  /**
   * An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`).
   */
  provide: any;

  /**
   * If true, then injector returns an array of instances. This is useful to allow multiple
   * providers spread across many files to provide configuration information to a common token.
   */
  multi?: boolean;
}

/**
 * Configures the `Injector` to return a value by invoking a `useFactory` function.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='FactorySansProvider'}
 *
 * @experimental
 */
export interface FactorySansProvider {
  /**
   * A function to invoke to create a value for this `token`. The function is invoked with
   * resolved values of `token`s in the `deps` field.
   */
  useFactory: Function;

  /**
   * A list of `token`s which need to be resolved by the injector. The list of values is then
   * used as arguments to the `useFactory` function.
   */
  deps?: any[];
}

/**
 * Configures the `Injector` to return a value by invoking a `useFactory` function.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='FactoryProvider'}
 *
 * Dependencies can also be marked as optional:
 *
 * {@example core/di/ts/provider_spec.ts region='FactoryProviderOptionalDeps'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 */
export interface FactoryProvider extends FactorySansProvider {
  /**
   * An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`).
   */
  provide: any;

  /**
   * If true, then injector returns an array of instances. This is useful to allow multiple
   * providers spread across many files to provide configuration information to a common token.
   */
  multi?: boolean;
}

/**
 * Describes how the `Injector` should be configured in a static way (Without reflection).
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @see `ValueProvider`
 * @see `ExistingProvider`
 * @see `FactoryProvider`
 */
export type StaticProvider = ValueProvider | ExistingProvider | StaticClassProvider |
    ConstructorProvider | FactoryProvider | any[];


/**
 * Configures the `Injector` to return an instance of `Type` when `Type' is used as the token.
 *
 * Create an instance by invoking the `new` operator and supplying additional arguments.
 * This form is a short form of `TypeProvider`;
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='TypeProvider'}
 */
export interface TypeProvider extends Type<any> {}

/**
 * Configures the `Injector` to return a value by invoking a `useClass` function.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ClassSansProvider'}
 *
 * @experimental
 */
export interface ClassSansProvider {
  /**
   * Class to instantiate for the `token`.
   */
  useClass: Type<any>;
}

/**
 * Configures the `Injector` to return an instance of `useClass` for a token.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/provider_spec.ts region='ClassProvider'}
 *
 * Note that following two providers are not equal:
 *
 * {@example core/di/ts/provider_spec.ts region='ClassProviderDifference'}
 *
 * ### Multi-value example
 *
 * {@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}
 */
export interface ClassProvider extends ClassSansProvider {
  /**
   * An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`).
   */
  provide: any;

  /**
   * If true, then injector returns an array of instances. This is useful to allow multiple
   * providers spread across many files to provide configuration information to a common token.
   */
  multi?: boolean;
}

/**
 * Describes how the `Injector` should be configured.
 *
 * For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).
 *
 * @see `TypeProvider`
 * @see `ClassProvider`
 * @see `StaticProvider`
 */
export type Provider = TypeProvider | ValueProvider | ClassProvider | ConstructorProvider |
    ExistingProvider | FactoryProvider | any[];
