import Property, {StringProperty, NumberProperty, BooleanProperty, ContentReferenceProperty, ContentAreaProperty, LinkListProperty, LinkProperty} from '@episerver/spa-core/Property'
import IContent, { BaseIContent } from '@episerver/spa-core/Models/IContent'
import ContentLink from '@episerver/spa-core/Models/ContentLink'
import { ComponentProps } from '@episerver/spa-core/EpiComponent'

/**
 * Calendar Event Page
 *
 * Used to define an Event
 *
 * @GUID f086fd08-4e54-4eb9-8367-c45630415226
 */
export default interface CalendarEventPageData extends IContent {
    /**
     * Start date
     *
     * No description available
     */
    eventStartDate: Property<any> // Original type: Date

    /**
     * Categories
     *
     * Categories associated with this content.
     */
    categories: Property<Array<ContentLink>>

    /**
     * End date
     *
     * No description available
     */
    eventEndDate: Property<any> // Original type: Date

    /**
     * Location
     *
     * No description available
     */
    location: StringProperty

    /**
     * Teaser ratio (width-height)
     *
     * No description available
     */
    teaserRatio: StringProperty

    /**
     * Main body
     *
     * No description available
     */
    mainBody: StringProperty

    /**
     * Title
     *
     * No description available
     */
    metaTitle: StringProperty

    /**
     * Exclude from results
     *
     * This will determine whether or not to show on search
     */
    excludeFromSearch: BooleanProperty

    /**
     * Image
     *
     * No description available
     */
    pageImage: ContentReferenceProperty

    /**
     * CSS files
     *
     * No description available
     */
    cssFiles: LinkListProperty

    /**
     * Script files
     *
     * No description available
     */
    scriptFiles: LinkListProperty

    /**
     * Main content area
     *
     * No description available
     */
    mainContentArea: ContentAreaProperty

    /**
     * Keywords
     *
     * No description available
     */
    keywords: StringProperty

    /**
     * Hide site header
     *
     * No description available
     */
    hideSiteHeader: BooleanProperty

    /**
     * Video
     *
     * No description available
     */
    teaserVideo: ContentReferenceProperty

    /**
     * CSS
     *
     * No description available
     */
    css: StringProperty

    /**
     * Scripts
     *
     * No description available
     */
    scripts: StringProperty

    /**
     * Page description
     *
     * No description available
     */
    pageDescription: StringProperty

    /**
     * Hide site footer
     *
     * No description available
     */
    hideSiteFooter: BooleanProperty

    /**
     * Text
     *
     * No description available
     */
    teaserText: StringProperty

    /**
     * Content type
     *
     * No description available
     */
    metaContentType: StringProperty

    /**
     * Industry
     *
     * No description available
     */
    industry: StringProperty

    /**
     * Author
     *
     * No description available
     */
    authorMetaData: StringProperty

    /**
     * Disable indexing
     *
     * No description available
     */
    disableIndexing: BooleanProperty

    /**
     * Highlight in page list
     *
     * No description available
     */
    highlight: BooleanProperty

    /**
     * Text alignment
     *
     * No description available
     */
    teaserTextAlignment: StringProperty

    /**
     * Color theme
     *
     * No description available
     */
    teaserColorTheme: StringProperty

    /**
     * Button label
     *
     * No description available
     */
    teaserButtonText: StringProperty

    /**
     * Button theme
     *
     * No description available
     */
    teaserButtonStyle: StringProperty

    /**
     * Display hover effect
     *
     * No description available
     */
    applyHoverEffect: BooleanProperty

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
export interface CalendarEventPageProps extends ComponentProps<CalendarEventPageData> {}

export class CalendarEventPageType extends BaseIContent<CalendarEventPageData> implements CalendarEventPageData {
    protected _typeName : string = "CalendarEventPage";
    /**
     * Map of all property types within this content type.
     */
    protected _propertyMap : { [propName: string]: string } = {
        'eventStartDate': 'Date',
        'categories': 'ContentReferenceList',
        'eventEndDate': 'Date',
        'location': 'LongString',
        'teaserRatio': 'LongString',
        'mainBody': 'XhtmlString',
        'metaTitle': 'LongString',
        'excludeFromSearch': 'Boolean',
        'pageImage': 'ContentReference',
        'cssFiles': 'LinkCollection',
        'scriptFiles': 'LinkCollection',
        'mainContentArea': 'ContentArea',
        'keywords': 'LongString',
        'hideSiteHeader': 'Boolean',
        'teaserVideo': 'ContentReference',
        'css': 'LongString',
        'scripts': 'LongString',
        'pageDescription': 'LongString',
        'hideSiteFooter': 'Boolean',
        'teaserText': 'LongString',
        'metaContentType': 'LongString',
        'industry': 'LongString',
        'authorMetaData': 'LongString',
        'disableIndexing': 'Boolean',
        'highlight': 'Boolean',
        'teaserTextAlignment': 'LongString',
        'teaserColorTheme': 'LongString',
        'teaserButtonText': 'LongString',
        'teaserButtonStyle': 'LongString',
        'applyHoverEffect': 'Boolean',
        'padding': 'LongString',
        'margin': 'LongString',
    }

    /**
     * Start date
     *
     * No description available
     */
    public eventStartDate: Property<any> // Original type: Date;

    /**
     * Categories
     *
     * Categories associated with this content.
     */
    public categories: Property<Array<ContentLink>>;

    /**
     * End date
     *
     * No description available
     */
    public eventEndDate: Property<any> // Original type: Date;

    /**
     * Location
     *
     * No description available
     */
    public location: StringProperty;

    /**
     * Teaser ratio (width-height)
     *
     * No description available
     */
    public teaserRatio: StringProperty;

    /**
     * Main body
     *
     * No description available
     */
    public mainBody: StringProperty;

    /**
     * Title
     *
     * No description available
     */
    public metaTitle: StringProperty;

    /**
     * Exclude from results
     *
     * This will determine whether or not to show on search
     */
    public excludeFromSearch: BooleanProperty;

    /**
     * Image
     *
     * No description available
     */
    public pageImage: ContentReferenceProperty;

    /**
     * CSS files
     *
     * No description available
     */
    public cssFiles: LinkListProperty;

    /**
     * Script files
     *
     * No description available
     */
    public scriptFiles: LinkListProperty;

    /**
     * Main content area
     *
     * No description available
     */
    public mainContentArea: ContentAreaProperty;

    /**
     * Keywords
     *
     * No description available
     */
    public keywords: StringProperty;

    /**
     * Hide site header
     *
     * No description available
     */
    public hideSiteHeader: BooleanProperty;

    /**
     * Video
     *
     * No description available
     */
    public teaserVideo: ContentReferenceProperty;

    /**
     * CSS
     *
     * No description available
     */
    public css: StringProperty;

    /**
     * Scripts
     *
     * No description available
     */
    public scripts: StringProperty;

    /**
     * Page description
     *
     * No description available
     */
    public pageDescription: StringProperty;

    /**
     * Hide site footer
     *
     * No description available
     */
    public hideSiteFooter: BooleanProperty;

    /**
     * Text
     *
     * No description available
     */
    public teaserText: StringProperty;

    /**
     * Content type
     *
     * No description available
     */
    public metaContentType: StringProperty;

    /**
     * Industry
     *
     * No description available
     */
    public industry: StringProperty;

    /**
     * Author
     *
     * No description available
     */
    public authorMetaData: StringProperty;

    /**
     * Disable indexing
     *
     * No description available
     */
    public disableIndexing: BooleanProperty;

    /**
     * Highlight in page list
     *
     * No description available
     */
    public highlight: BooleanProperty;

    /**
     * Text alignment
     *
     * No description available
     */
    public teaserTextAlignment: StringProperty;

    /**
     * Color theme
     *
     * No description available
     */
    public teaserColorTheme: StringProperty;

    /**
     * Button label
     *
     * No description available
     */
    public teaserButtonText: StringProperty;

    /**
     * Button theme
     *
     * No description available
     */
    public teaserButtonStyle: StringProperty;

    /**
     * Display hover effect
     *
     * No description available
     */
    public applyHoverEffect: BooleanProperty;

    /**
     * Padding
     *
     * No description available
     */
    public padding: StringProperty;

    /**
     * Margin
     *
     * No description available
     */
    public margin: StringProperty;

}
