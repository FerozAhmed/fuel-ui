import { OnDestroy } from 'angular2/core';
import { Tag } from './Tag';
export declare class TagSet implements OnDestroy {
    tags: Array<Tag>;
    private destroyed;
    ngOnDestroy(): void;
    addTag(tag: Tag): void;
    removeTag(tag: Tag): void;
}
