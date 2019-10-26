<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * This is a dummy entity. Remove it!
 *
 * @ApiResource
 * @ORM\Entity
 */
class Movie
{
    /**
     * @var int The entity Id
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string Title
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $title;

    /**
     * @var string The style of this movie.
     *
     * @ORM\Column(nullable=true)
     *
     */
    public $category;

    /**
     * @var string The description of this movie.
     *
     * @ORM\Column(nullable=true)
     *
     */
    public $description;

    /**
     * @var boolean is watch?
     *
     * @ORM\Column(nullable=true)
     *
     */
    public $is_watch;

    public function getId(): int
    {
        return $this->id;
    }
}
