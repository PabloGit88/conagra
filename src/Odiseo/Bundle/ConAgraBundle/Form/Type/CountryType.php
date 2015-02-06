<?php

namespace Odiseo\Bundle\ConAgraBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class CountryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('name', 'text', array(
        		'required' => true,
        		'label'    => 'Pais'
        ))
        ->add('isoCode', 'text', array(
        		'required' => true,
        		'label'    => 'Codigo ISO'
        ))
        ;
    }

    public function getName()
    {
        return 'odiseo_conagra_country';
    }
}
