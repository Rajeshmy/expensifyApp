import {DefaultNavigatorOptions, ParamListBase, StackNavigationState, StackRouterOptions} from '@react-navigation/native';
import {StackNavigationEventMap, StackNavigationOptions} from '@react-navigation/stack';

type ResponsiveStackNavigatorConfig = {
    isSmallScreenWidth: boolean;
};

type ResponsiveStackNavigatorRouterOptions = StackRouterOptions;

type ResponsiveStackNavigatorProps = DefaultNavigatorOptions<ParamListBase, StackNavigationState<ParamListBase>, StackNavigationOptions, StackNavigationEventMap> &
    ResponsiveStackNavigatorConfig;

export type {ResponsiveStackNavigatorRouterOptions, ResponsiveStackNavigatorProps, ResponsiveStackNavigatorConfig};
