namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'type',
        'price_per_night',
        'total_nights',
        'average_rating',
        'image_url',
        'is_guest_favorite',
    ];
    public function reviews()
{
    return $this->hasMany(Review::class);
}
}