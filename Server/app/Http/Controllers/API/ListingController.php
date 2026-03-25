namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
// List all listings
public function index()
{
$listings = Listing::all();
return response()->json([
'status_code' => 200,
'status' => 'success',
'message' => 'Listings fetched successfully',
'data' => $listings
]);
}

// Get single listing
public function show($id)
{
$listing = Listing::find($id);
if (!$listing) {
return response()->json([
'status_code' => 404,
'status' => 'error',
'message' => 'Listing not found'
]);
}
return response()->json([
'status_code' => 200,
'status' => 'success',
'message' => "user fetched successfully",
'data' => $listing
]);
}

// Create listing
public function store(Request $request)
{
$request->validate([
'title' => 'required|string',
'type' => 'required|string',
'price_per_night' => 'required|numeric',
'total_nights' => 'required|integer',
'average_rating' => 'required|numeric',
'image_url' => 'required|url',
'is_guest_favorite' => 'required|boolean',
]);

$listing = Listing::create($request->all());

return response()->json([
'status_code' => 201,
'status' => 'success',
'message' => 'Listing created successfully',
'data' => $listing
], 201);
}

// Update listing
public function update(Request $request, $id)
{
$listing = Listing::find($id);
if (!$listing) {
return response()->json([
'status_code' => 404,
'status' => 'error',
'message' => 'Listing not found'
], 404);
}

$listing->update($request->all());

return response()->json([
'status_code' => 200,
'status' => 'success',
'message' => 'Listing updated successfully',
'data' => $listing
], 200);
}

// Delete listing
public function destroy($id)
{
$listing = Listing::find($id);
if (!$listing) {
return response()->json([
'status_code' => 404,
'status' => 'error',
'message' => 'Listing not found'
], 404);
}

$listing->delete();

return response()->json([
'status_code' => 200,
'status' => 'success',
'message' => 'Listing deleted successfully'
], 200);
}
}