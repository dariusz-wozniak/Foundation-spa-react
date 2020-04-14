import Property, {StringProperty, NumberProperty, BooleanProperty, ContentReferenceProperty, ContentAreaProperty, LinkListProperty, LinkProperty} from 'Episerver/Property'
import IContent from 'Episerver/Models/IContent'
import ContentLink from 'Episerver/Models/ContentLink'
import { ComponentProps } from 'Episerver/EpiComponent'

/**
 * Hero Block Callout
 *
 * No Description available.
 *
 * @GUID 7a3c9e9e-8612-4722-b795-2a93cb54a476
 */
export default interface HeroBlockCalloutData extends IContent {
    /**
     * Text
     *
     * No description available
     */
    calloutContent: StringProperty

    /**
     * Text placement
     *
     * No description available
     */
    calloutContentAlignment: StringProperty

    /**
     * Text color
     *
     * Sets text color of callout content
     */
    calloutTextColor: StringProperty

    /**
     * Background color
     *
     * No description available
     */
    backgroundColor: StringProperty

    /**
     * Callout opacity (0 to 1)
     *
     * No description available
     */
    calloutOpacity: NumberProperty

    /**
     * Callout position
     *
     * No description available
     */
    calloutPosition: StringProperty

    /**
     * Padding
     *
     * No description available
     */
    padding: StringProperty

    /**
     * Margin
     *
     * No description available
     */
    margin: StringProperty

}

/**
 * Convenience interface for componentDidUpdate & componentDidMount methods.
 */
export interface HeroBlockCalloutProps extends ComponentProps<HeroBlockCalloutData> {}
