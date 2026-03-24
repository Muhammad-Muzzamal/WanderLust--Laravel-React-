use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('listings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('type'); // Condo, Apartment, Entire Home
            $table->float('price_per_night');
            $table->integer('total_nights')->default(1);
            $table->float('average_rating', 3, 2); // e.g., 4.84
            $table->string('image_url');
            $table->boolean('is_guest_favorite')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('listings');
    }
};