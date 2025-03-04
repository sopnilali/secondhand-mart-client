import UpdateListingForm from '@/components/modules/listing/UpdateListingForm';
import SHContainer from '@/components/ui/core/SHContainer';
import { getAllCategory } from '@/services/category';
import { getSinglelisting } from '@/services/listing';
import React from 'react'

const UpdateManagePage = async ({ params }: any) => {

    const { id } = await params;
    const { data: listing } = await getSinglelisting(id)

    const { data: categories } = await getAllCategory();

    return (
        <div>
            <SHContainer>
                <h2></h2>
                <UpdateListingForm listing={listing} categories={categories?.result} />
            </SHContainer>
        </div>
    )
}

export default UpdateManagePage
