import Property, {StringProperty, NumberProperty, BooleanProperty, ContentReferenceProperty, ContentAreaProperty, LinkListProperty, LinkProperty} from '@episerver/spa-core/Property'
import IContent, { BaseIContent } from '@episerver/spa-core/Models/IContent'
import ContentLink from '@episerver/spa-core/Models/ContentLink'
import { ComponentProps } from '@episerver/spa-core/EpiComponent'

/**
 * Content Recommendations Block
 *
 * List of content recommendations based on topic interests
 *
 * @GUID 41ccc1ee-68ac-48f9-804b-b9a4054aeaa4
 */
export default interface ContentRecommendationsBlockData extends IContent {
    /**
     * Number of recommendations
     *
     * No description available
     */
    numberOfRecommendations: NumberProperty

    /**
     * Delivery Widget
     *
     * No description available
     */
    deliveryAPIKey: StringProperty

    /**
     * Recommendations Template
     *
     * No description available
     */
    recommendationsTemplate: StringProperty

}

/**
 * Convenience interface for componentDidUpdate & componentDidMount methods.
 */
export interface ContentRecommendationsBlockProps extends ComponentProps<ContentRecommendationsBlockData> {}

export class ContentRecommendationsBlockType extends BaseIContent<ContentRecommendationsBlockData> implements ContentRecommendationsBlockData {
    protected _typeName : string = "ContentRecommendationsBlock";
    /**
     * Map of all property types within this content type.
     */
    protected _propertyMap : { [propName: string]: string } = {
        'numberOfRecommendations': 'Number',
        'deliveryAPIKey': 'LongString',
        'recommendationsTemplate': 'LongString',
    }

    /**
     * Number of recommendations
     *
     * No description available
     */
    public numberOfRecommendations: NumberProperty;

    /**
     * Delivery Widget
     *
     * No description available
     */
    public deliveryAPIKey: StringProperty;

    /**
     * Recommendations Template
     *
     * No description available
     */
    public recommendationsTemplate: StringProperty;

}
