import Property, {StringProperty, NumberProperty, BooleanProperty, ContentReferenceProperty, ContentAreaProperty, LinkListProperty, LinkProperty} from 'Episerver/Property'
import IContent from 'Episerver/Models/IContent'
import ContentLink from 'Episerver/Models/ContentLink'
import { ComponentProps } from 'Episerver/EpiComponent'

/**
 * VisitorDataHiddenElementBlock
 *
 * No Description available.
 *
 * @GUID d08021d2-f73e-4359-9603-3c66d7eb97c6
 */
export default interface VisitorDataHiddenElementBlockData extends IContent {
    /**
     * VisitorDataSources
     *
     * No description available
     */
    visitorDataSources: StringProperty

    /**
     * External system field mapping
     *
     * No description available
     */
    forms_ExternalSystemsFieldMappings: Property<any> // Original type: Property Field Mapping Collection

    /**
     * ValidatorMessages
     *
     * No description available
     */
    validatorMessages: Property<any> // Original type: Validator with message collection

}

/**
 * Convenience interface for componentDidUpdate & componentDidMount methods.
 */
export interface VisitorDataHiddenElementBlockProps extends ComponentProps<VisitorDataHiddenElementBlockData> {}
