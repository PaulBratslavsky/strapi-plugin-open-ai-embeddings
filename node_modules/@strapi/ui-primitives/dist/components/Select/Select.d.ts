/**
 * We've forked this from RadixUI to add primarily support for multi-select.
 * This is on their roadmap – https://github.com/radix-ui/primitives/issues/1193
 *
 * The changes are dotted around the codebase but all linked to a primary objective:
 * 1. The Select `value` can now be a string or an array of strings
 * 2. The Select `onValueChange` callback now receives a string or an array of strings
 *
 * Therefore, anywhere you see code handling values. It will accept and manage `string | string[]`,
 * thankfully Typescript is very helpful with this.
 *
 * Hopefully in the future we can remove this fork ✌🏼
 */
import * as React from 'react';
import type { Scope } from '@radix-ui/react-context';
import { DismissableLayer } from '@radix-ui/react-dismissable-layer';
import { FocusScope } from '@radix-ui/react-focus-scope';
import * as PopperPrimitive from '@radix-ui/react-popper';
import { Portal as PortalPrimitive } from '@radix-ui/react-portal';
import { Primitive } from '@radix-ui/react-primitive';
import type * as Radix from '@radix-ui/react-primitive';
type Direction = 'ltr' | 'rtl';
type ScopedProps<P> = P & {
    __scopeSelect?: Scope;
};
declare const createSelectScope: import("@radix-ui/react-context").CreateScope;
interface SharedSelectProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    dir?: Direction;
    name?: string;
    autoComplete?: string;
    disabled?: boolean;
    required?: boolean;
}
interface SingleSelectProps extends SharedSelectProps {
    onValueChange?(value: string): void;
    value?: string;
    defaultValue?: string;
    multi?: false;
}
interface MultiSelectProps extends SharedSelectProps {
    onValueChange?(value: string[]): void;
    value?: string[];
    defaultValue?: string[];
    multi: true;
}
type SelectProps = SingleSelectProps | MultiSelectProps;
declare const Select: {
    (props: ScopedProps<SelectProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>;
interface SelectTriggerProps extends PrimitiveButtonProps {
}
declare const SelectTrigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLDivElement>>;
type PrimitiveSpanProps = Radix.ComponentPropsWithoutRef<typeof Primitive.span>;
type SelectValueRenderFn = {
    ({ value, textValue }: {
        value?: string;
        textValue?: string;
    }): React.ReactNode;
    (value?: string): React.ReactNode;
};
interface SelectValueProps extends Omit<PrimitiveSpanProps, 'placeholder' | 'children'> {
    placeholder?: React.ReactNode;
    children?: React.ReactNode | SelectValueRenderFn;
}
declare const SelectValue: React.ForwardRefExoticComponent<SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
interface SelectIconProps extends PrimitiveSpanProps {
}
declare const SelectIcon: React.ForwardRefExoticComponent<SelectIconProps & React.RefAttributes<HTMLSpanElement>>;
type PortalProps = React.ComponentPropsWithoutRef<typeof PortalPrimitive>;
interface SelectPortalProps extends Omit<PortalProps, 'asChild'> {
    children?: React.ReactNode;
}
declare const SelectPortal: {
    (props: ScopedProps<SelectPortalProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
interface SelectContentProps extends SelectContentImplProps {
}
declare const SelectContent: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
type DismissableLayerProps = React.ComponentPropsWithoutRef<typeof DismissableLayer>;
type FocusScopeProps = Radix.ComponentPropsWithoutRef<typeof FocusScope>;
type SelectPopperPrivateProps = {
    onPlaced?: PopperContentProps['onPlaced'];
};
interface SelectContentImplProps extends Omit<SelectPopperPositionProps, keyof SelectPopperPrivateProps>, Omit<SelectItemAlignedPositionProps, keyof SelectPopperPrivateProps> {
    /**
     * Event handler called when auto-focusing on close.
     * Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
    /**
     * Event handler called when the escape key is down.
     * Can be prevented.
     */
    onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
    /**
     * Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.
     * Can be prevented.
     */
    onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
    position?: 'item-aligned' | 'popper';
}
interface SelectItemAlignedPositionProps extends PrimitiveDivProps, SelectPopperPrivateProps {
}
type PopperContentProps = React.ComponentPropsWithoutRef<typeof PopperPrimitive.Content>;
interface SelectPopperPositionProps extends PopperContentProps, SelectPopperPrivateProps {
}
type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>;
interface SelectViewportProps extends PrimitiveDivProps {
}
declare const SelectViewport: React.ForwardRefExoticComponent<SelectViewportProps & React.RefAttributes<HTMLDivElement>>;
interface SelectGroupProps extends PrimitiveDivProps {
}
declare const SelectGroup: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
interface SelectLabelProps extends PrimitiveDivProps {
}
declare const SelectLabel: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
interface SelectItemProps extends PrimitiveDivProps {
    value: string | string[];
    disabled?: boolean;
    textValue?: string;
}
declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
interface SelectItemTextProps extends PrimitiveSpanProps {
}
declare const SelectItemText: React.ForwardRefExoticComponent<SelectItemTextProps & React.RefAttributes<HTMLSpanElement>>;
interface SelectItemIndicatorProps extends Omit<PrimitiveSpanProps, 'children'> {
    children?: React.ReactNode | ((state: {
        isSelected: boolean;
        isIntermediate: boolean;
    }) => React.ReactNode);
}
declare const SelectItemIndicator: React.ForwardRefExoticComponent<SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
interface SelectScrollUpButtonProps extends Omit<SelectScrollButtonImplProps, 'onAutoScroll'> {
}
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;
interface SelectScrollDownButtonProps extends Omit<SelectScrollButtonImplProps, 'onAutoScroll'> {
}
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;
interface SelectScrollButtonImplProps extends PrimitiveDivProps {
    onAutoScroll(): void;
}
interface SelectSeparatorProps extends PrimitiveDivProps {
}
declare const SelectSeparator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;
type PopperArrowProps = Radix.ComponentPropsWithoutRef<typeof PopperPrimitive.Arrow>;
interface SelectArrowProps extends PopperArrowProps {
}
declare const SelectArrow: React.ForwardRefExoticComponent<SelectArrowProps & React.RefAttributes<SVGSVGElement>>;
declare const Root: {
    (props: ScopedProps<SelectProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const Trigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLDivElement>>;
declare const Value: React.ForwardRefExoticComponent<SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const Icon: React.ForwardRefExoticComponent<SelectIconProps & React.RefAttributes<HTMLSpanElement>>;
declare const Portal: {
    (props: ScopedProps<SelectPortalProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const Content: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
declare const Viewport: React.ForwardRefExoticComponent<SelectViewportProps & React.RefAttributes<HTMLDivElement>>;
declare const Group: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Label: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
declare const ItemText: React.ForwardRefExoticComponent<SelectItemTextProps & React.RefAttributes<HTMLSpanElement>>;
declare const ItemIndicator: React.ForwardRefExoticComponent<SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
declare const ScrollUpButton: React.ForwardRefExoticComponent<SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const ScrollDownButton: React.ForwardRefExoticComponent<SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const Separator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;
declare const Arrow: React.ForwardRefExoticComponent<SelectArrowProps & React.RefAttributes<SVGSVGElement>>;
export { createSelectScope, Select, SelectTrigger, SelectValue, SelectIcon, SelectPortal, SelectContent, SelectViewport, SelectGroup, SelectLabel, SelectItem, SelectItemText, SelectItemIndicator, SelectScrollUpButton, SelectScrollDownButton, SelectSeparator, SelectArrow, Root, Trigger, Value, Icon, Portal, Content, Viewport, Group, Label, Item, ItemText, ItemIndicator, ScrollUpButton, ScrollDownButton, Separator, Arrow, };
export type { SingleSelectProps, MultiSelectProps, SelectProps, SelectTriggerProps, SelectValueProps, SelectValueRenderFn, SelectIconProps, SelectPortalProps, SelectContentProps, SelectViewportProps, SelectGroupProps, SelectLabelProps, SelectItemProps, SelectItemTextProps, SelectItemIndicatorProps, SelectScrollUpButtonProps, SelectScrollDownButtonProps, SelectSeparatorProps, SelectArrowProps, };
